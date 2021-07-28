const ErrorMessage = ({ message }) => {
    
  return (
      <div className="flex justify-start ml-4">
          <ul>
              <li className="flex items-center py-1">
                  <div className="bg-red-200 text-red-700 rounded-full p-1 fill-current ">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                          />
                      </svg>
                  </div>
                  <span className="text-red-700 font-medium text-sm ml-3">{message}</span>
              </li>
          </ul>
      </div>        
  )
}

export default ErrorMessage