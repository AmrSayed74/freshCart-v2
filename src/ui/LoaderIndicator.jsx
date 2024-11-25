const LoaderIndicator = () => {
  return (
    <div className=" absolute inset-0 flex h-screen w-full items-center justify-center bg-white-200/20 backdrop-blur-sm">
      <div className="loader"></div>
    </div>
  );
};

export default LoaderIndicator;
