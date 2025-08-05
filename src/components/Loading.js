'use client';

const Loading = ({ size = 'medium', color = 'green' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  const colorClasses = {
    green: 'border-green-600',
    white: 'border-white',
    gray: 'border-gray-600'
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]}`}
      ></div>
    </div>
  );
};

// Page Loading Component
export const PageLoading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center">
        <Loading size="xlarge" color="green" />
        <p className="mt-4 text-gray-600 text-lg">লোড হচ্ছে...</p>
      </div>
    </div>
  );
};

// Button Loading Component
export const ButtonLoading = ({ text = 'লোড হচ্ছে...' }) => {
  return (
    <div className="flex items-center space-x-2">
      <Loading size="small" color="white" />
      <span>{text}</span>
    </div>
  );
};

export default Loading;
