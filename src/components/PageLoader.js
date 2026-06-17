const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-500 dark:text-gray-400 text-sm">Loading...</p>
    </div>
  </div>
);

export default PageLoader;
