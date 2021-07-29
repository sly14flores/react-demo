import avatar from '../../avatar.jpg'
import { Menu } from '@headlessui/react'

const DropDown = ({ confirmLogout, setConfirmLogout }) => {

    const handleConfirm = () => {
        setConfirmLogout(!confirmLogout)
    }

    return (
        <Menu as="div">
            <Menu.Button className="relative z-10 block rounded-md bg-white p-2 focus:outline-none">                        
                <img
                    className="h-full w-full rounded-full mx-auto"
                    src={avatar}
                    alt="Profile"
                />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 py-2 w-48 bg-gray-100 rounded-md shadow-xl z-20">
                <Menu.Item>
                    <a href="#!" onClick={handleConfirm} className="block px-4 py-2 text-sm capitalize text-gray-500 hover:text-gray-900">
                        Sign Out
                    </a>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )

}

export default DropDown