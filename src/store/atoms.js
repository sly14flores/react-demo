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
    }
})

const profilesState = atom({
    key: 'profilesState',
    default: []
})

export {
    authState,
    profileState,
    profilesState,
}