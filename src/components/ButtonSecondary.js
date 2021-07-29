import Spinner from '../components/Spinner'

const ButtonSecondary = ({className, type, onClick, loading = false, children}) => {

  let classes = "px-4 py-2 rounded text-white inline-block shadow-lg bg-green-500 hover:bg-green-600 focus:bg-green-700"
  if (className) classes += ` ${className}`

  return (
    <>
      <button
        type={type}
        className={classes}
        onClick={onClick}
      >
        {
          loading && <span className="inline-block"><Spinner /></span>
        }
        {children}
      </button>
    </>
  )

}

export default ButtonSecondary