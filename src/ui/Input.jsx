const Input = ({
  className,
  name,
  register,
  validationRules,
  isPending,
  type,
  autoComplete,
}) => {
  return (
    <input
      autoComplete={autoComplete}
      className={className}
      type={type}
      {...register(name, validationRules)}
      id={name}
      placeholder=" "
      disabled={isPending}
    />
  );
};

export default Input;
