import TopNav from './components/TopNav'
import Post from './components/Post'

const Home = () => {

    return (
        <div>
            <TopNav />
            <div class="grid grid-cols-3 gap-2">
                <div>
                    <div className="w-3/4 mt-4 ml-4 bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="flex flex-col">
                            <a href="#!" className="px-4 py-2 hover:bg-gray-50">Home</a>
                            <a href='#!' className="px-4 py-2 hover:bg-gray-50">New Post</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-4 bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                        <button className="outline-none focus:outline-none">
                        <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                        <input type="search" name="" id="" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
                    </div>
                    <Post />
                </div>
                <div>
                    <div className="w-3/4 mt-4 ml-20 bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="px-4 py-4 text-md text-gray-400">Categories</div>
                        <div className="flex flex-col">
                            <a href="#!" className="px-4 py-2 hover:bg-gray-50">All</a>
                            <a href='#!' className="px-4 py-2 hover:bg-gray-50">UX Design</a>
                            <a href='#!' className="px-4 py-2 hover:bg-gray-50">Front end</a>
                            <a href='#!' className="px-4 py-2 hover:bg-gray-50">Back end</a>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    )

}

export default Home