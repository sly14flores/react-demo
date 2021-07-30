const SelectField = ({ className, label, id, name, value, options, onChange, onBlur, invalid = false, invalidMessage = "This field is required", ...rest }) => {

    let selectClasses = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    if (invalid) {
        selectClasses += " border-red-500 border-2"
    }

    const selectOptions = options.map(opt =>
        <option value={opt.id} key={opt.id}>{opt.name}</option>
    )

    return (
        <div className={className}>
            <label htmlFor={id} className="block text-gray-700 text-sm font-normal mb-2">
                {label}
            </label>
            <select
                id={id}
                name={name}
                className={selectClasses}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            >
                {selectOptions}
            </select>
            { (invalid) &&
                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                    {invalidMessage}
                </span>
            }            
        </div>
    )
}

export default SelectField