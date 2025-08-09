"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analyticsConfig } from "../lib/seo";

// Google Analytics 4 - Internal Component
function GoogleAnalyticsInternal() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!analyticsConfig.googleAnalytics.measurementId) return;

    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalytics.measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", analyticsConfig.googleAnalytics.measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_parameter_1: "foundation_page",
      },
    });

    return () => {
      // Cleanup script if component unmounts
      const existingScript = document.querySelector(
        `script[src*="${analyticsConfig.googleAnalytics.measurementId}"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (!window.gtag) return;

    const url = pathname + searchParams.toString();

    // Track page views
    window.gtag("config", analyticsConfig.googleAnalytics.measurementId, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track custom events for foundation activities
    window.gtag("event", "page_view", {
      event_category: "Foundation",
      event_label: pathname,
      custom_parameter_1: "foundation_page",
    });
  }, [pathname, searchParams]);

  return null;
}

// Google Analytics 4 - Wrapper with Suspense
export function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsInternal />
    </Suspense>
  );
}

// Google Tag Manager
export function GoogleTagManager() {
  useEffect(() => {
    if (!analyticsConfig.googleTagManager.containerId) return;

    // Load GTM script
    const script = document.createElement("script");
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${analyticsConfig.googleTagManager.containerId}');
    `;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${analyticsConfig.googleTagManager.containerId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(noscript);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        `script[src*="${analyticsConfig.googleTagManager.containerId}"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
      const existingNoscript = document.querySelector(
        `noscript iframe[src*="${analyticsConfig.googleTagManager.containerId}"]`
      );
      if (existingNoscript && existingNoscript.parentNode) {
        existingNoscript.parentNode.remove();
      }
    };
  }, []);

  return null;
}

// Facebook Pixel - Internal Component
function FacebookPixelInternal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!analyticsConfig.facebookPixel.pixelId) return;

    // Load Facebook Pixel
    const script = document.createElement("script");
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${analyticsConfig.facebookPixel.pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=${analyticsConfig.facebookPixel.pixelId}&ev=PageView&noscript=1" />
    `;
    document.body.appendChild(noscript);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src*="fbevents.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (!window.fbq) return;

    // Track page views
    window.fbq("track", "PageView");

    // Track custom events for foundation activities
    if (pathname.includes("/volunteer")) {
      window.fbq("track", "Lead", { content_name: "Volunteer Interest" });
    } else if (pathname.includes("/contact")) {
      window.fbq("track", "Contact", { content_name: "Contact Form" });
    } else if (pathname.includes("/programs")) {
      window.fbq("track", "ViewContent", { content_name: "Programs" });
    }
  }, [pathname]);

  return null;
}

// Facebook Pixel - Wrapper with Suspense
export function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelInternal />
    </Suspense>
  );
}

// Custom event tracking utilities
export const trackEvent = (eventName, parameters = {}) => {
  // Google Analytics
  if (window.gtag) {
    window.gtag("event", eventName, {
      event_category: "Foundation",
      ...parameters,
    });
  }

  // Facebook Pixel
  if (window.fbq) {
    window.fbq("track", eventName, parameters);
  }

  // Console log for development
  if (process.env.NODE_ENV === "development") {
    console.log("Analytics Event:", eventName, parameters);
  }
};

// Track specific foundation events
export const trackVolunteerInterest = () => {
  trackEvent("VolunteerInterest", {
    event_label: "Volunteer Form",
    value: 1,
  });
};

export const trackDonationInterest = () => {
  trackEvent("DonationInterest", {
    event_label: "Donation Inquiry",
    value: 1,
  });
};

export const trackContactForm = () => {
  trackEvent("ContactForm", {
    event_label: "Contact Form Submission",
    value: 1,
  });
};

export const trackProgramView = (programName) => {
  trackEvent("ProgramView", {
    event_label: programName,
    content_name: programName,
  });
};

// Main Analytics component
export default function Analytics() {
  return (
    <>
      <GoogleAnalytics />
      <GoogleTagManager />
      <FacebookPixel />
    </>
  );
}
