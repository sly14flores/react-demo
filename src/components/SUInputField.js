const SUInputField = ({
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

  let inputClasses = "text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
  if (invalid) {
    inputClasses += " border-red-500 border-2"
  }

  return (
    <div className={className}>
      <span
        htmlFor={name}
        className="px-1 text-md text-gray-600"
      >
        {label}
      </span>
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

export default SUInputField