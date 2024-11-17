const Button = ({ children, className, type, onClick, isPending }) => {
  return (
    <button
      disabled={isPending}
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
