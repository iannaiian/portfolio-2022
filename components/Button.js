const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`p-2 rounded-md ring-1 hover:ring-2 ring-white hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
