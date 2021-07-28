import { atom } from 'recoil';

const authState = atom({
    key: 'authState',
    default: {
        isLogin: false,
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

const storage = localStorage.getItem("dictDemo") || '{"profiles": []}'
const { profiles } = JSON.parse(storage)

const profilesState = atom({
    key: 'profilesState',
    default: profiles
})

export {
    authState,
    profileState,
    profilesState,
}