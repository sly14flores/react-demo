import classNames from '../../library/classNames'

const Categories = ({ category, setCategory }) => {

  return (
    <div className="w-3/4 mt-4 ml-20 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-4 text-md text-gray-400">Categories</div>
      <div className="flex flex-col">
          <a href="#!" className={classNames("px-4 py-2 hover:bg-gray-200", category==="All"?" bg-gray-200":"")} onClick={() => setCategory('All')}>All</a>
          <a href='#!' className={classNames("px-4 py-2 hover:bg-gray-200", category==="UX"?" bg-gray-200":"")} onClick={() => setCategory('UX')}>UX Design</a>
          <a href='#!' className={classNames("px-4 py-2 hover:bg-gray-200", category==="FE"?" bg-gray-200":"")} onClick={() => setCategory('FE')}>Front end</a>
          <a href='#!' className={classNames("px-4 py-2 hover:bg-gray-200", category==="BE"?" bg-gray-200":"")} onClick={() => setCategory('BE')}>Back end</a>
      </div>
    </div>    
  )

}

export default Categories