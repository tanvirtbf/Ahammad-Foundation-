/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ahammad-foundation.org',
  generateRobotsTxt: false, // We have a custom robots.txt
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin/*', '/api/*', '/_next/*', '/private/*'],
  
  // Additional paths to include
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/programs'),
    await config.transform(config, '/gallery'),
    await config.transform(config, '/news'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/volunteer'),
    await config.transform(config, '/videos'),
  ],

  // Custom transform function
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/about' || path === '/programs') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path === '/news' || path === '/gallery') {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
