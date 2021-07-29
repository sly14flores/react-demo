import { atom } from 'recoil';

const storage = localStorage.getItem("dictDemo") || '{"profiles": [], "isLogin": false, "login": {"id":0, "firstname":"", "lastname":""}}'
const { profiles, isLogin, login } = JSON.parse(storage)

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
    default: profiles || []
})

const tabsState = atom({
    key: 'tabsState',
    default: {
        main: '/',
        category: 'All'
    }
})

const postsState = atom({
    key: 'postsState',
    default: []
})

export {
    authState,
    profileState,
    loginState,
    profilesState,
    tabsState,
    postsState,
}