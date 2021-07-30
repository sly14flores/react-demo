import logo from '../../logo.svg'
import DropDown from './DropDown'
import ConfirmDialog from '../../components/ConfirmDialog'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { authState, loginState } from '../../store/atoms';
import { selectLoginState } from '../../store/selectors';
import useStorage from '../../hooks/useStorage';

const TopNav = () => {

    const [confirmLogout, setConfirmLogout] = useState(false)
    const setAuth = useSetRecoilState(authState);
    const setLoginState = useSetRecoilState(loginState);  
    const history = useHistory()

    const loginProfile = useRecoilValue(selectLoginState)

    const isLoginLocal = useStorage('isLogin')
    const loginLocal = useStorage('login')

    const logout = () => {
        setAuth({isLogin: false})
        isLoginLocal.update(false)
        const login = {
            id: 0,
            firstname: '',
            lastname: ''
        }
        setLoginState(login)
        loginLocal.update(login)

        setTimeout(() => {
            history.push("/login")
        }, 500)
    }

    return (
        <>
            <div className="flex-1 flex flex-col">
                <nav className="px-4 flex justify-between bg-white h-16 border-b-2">

                    {/* <!-- top bar left --> */}
                    <ul className="flex items-center">
                        {/* <!-- add button --> */}
                        <li className="h-14 w-14">
                            <img
                                className="h-full w-full mx-auto"
                                src={logo}
                                alt="svelte logo" />
                        </li>
                    </ul>

                    <ul className="flex items-center">
                        {/* <!-- add button --> */}
                        <li>
                            <h1 className="pl-8 lg:pl-0 text-gray-700">DICT React Demo</h1>                           
                        </li>
                    </ul>

                    {/* <!-- to bar right  --> */}
                    <ul className="flex items-center">
                        <li className="h-10 w-24 pt-2">
                            {loginProfile.firstname} {loginProfile.lastname}
                        </li>
                        <li className="h-10 w-10">
                            <DropDown confirmLogout={confirmLogout} setConfirmLogout={setConfirmLogout} />
                        </li>
                    </ul>
                </nav>
            </div>
            <ConfirmDialog
                title="Confirmation"
                isOpen={confirmLogout}
                setIsOpen={setConfirmLogout}
                onOk={logout}
            >
                Are you sure you want to logout?
            </ConfirmDialog>
        </>     
    )
}

export default TopNav