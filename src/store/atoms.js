import { atom } from 'recoil';

const storage = localStorage.getItem("dictDemo") || '{"profiles": [], "isLogin": false}'
const { profiles, isLogin } = JSON.parse(storage)

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

const profilesState = atom({
    key: 'profilesState',
    default: profiles || []
})

export {
    authState,
    profileState,
    profilesState,
}