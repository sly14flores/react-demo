const ButtonPrimary = ({className, type, onClick, children}) => {

  let classes = "px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
  if (className) classes += ` ${className}`

  return (
    <>
      <button
        type={type}
        className={classes}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )

}

export default ButtonPrimary