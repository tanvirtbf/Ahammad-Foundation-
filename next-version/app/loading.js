export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
          <span className="text-white font-bold text-3xl">আ</span>
        </div>
        
        {/* Loading Spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          লোড হচ্ছে...
        </h2>
        <p className="text-gray-600">
          অনুগ্রহ করে অপেক্ষা করুন
        </p>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
