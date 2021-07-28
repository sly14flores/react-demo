const InputField = ({
  className,
  type,
  label,
  name,
  value,
  onChange,
  invalid = false,
  invalidMessage = "This field is required",
  ...rest
}) => {

  let inputClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  if (invalid) {
    inputClasses += " border-red-500 border-2"
  }

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-normal mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={inputClasses}
        {...rest}
        />
        { invalid &&
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {invalidMessage}
            </span>
        }         
    </div>
  )

}

export default InputField