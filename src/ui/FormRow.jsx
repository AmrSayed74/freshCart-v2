const FormRow = ({ label, errors, children, className }) => {
  return (
    <div className={className}>
      {children}
      {errors && <div className="text-red-600 text-2xl">{errors}</div>}
      {label && (
        <label
          htmlFor={children.props?.id}
          className="transition peer-focus:font-medium absolute text-3xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-90 top-[-3px] z-[5] origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormRow;
