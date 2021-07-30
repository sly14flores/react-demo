import { atom } from 'recoil';
import { storageStr } from '../constants'

const storage = localStorage.getItem("dictDemo") || storageStr
const { profiles, isLogin, login, posts } = JSON.parse(storage)

const authState = atom({
    key: 'authState',
    default: {
        isLogin: isLogin || false,
    }
})

const profileState = atom({
    key: 'profileState',
    default: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
    }
})

const { id, firstname, lastname } = login
const loginState = atom({
    key: 'loginState',
    default: {
        id: id || 0,
        firstname: firstname || '',
        lastname: lastname || '',
    }
})

const profilesState = atom({
    key: 'profilesState',
    default: profiles
})

const postsState = atom({
    key: 'postsState',
    default: posts
})

export {
    authState,
    profileState,
    loginState,
    profilesState,
    postsState,
}