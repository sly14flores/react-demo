import { selector } from 'recoil';
import {
    authState,
    profileState,
    loginState,
    profilesState,
    postsState,
} from './atoms'

const selectAuthState = selector({
    key: 'selectAuthState',
    get: ({get}) => {
        const { isLogin } = get(authState)
        return isLogin
    }
})

const selectCredentialState = selector({
    key: 'selectCredentialState',
    get: ({get}) => {
        const { credential } = get(authState)
        return credential
    }
})

const selectProfileState = selector({
    key: 'selectProfileState',
    get: ({get}) => {
        const profile = get(profileState)
        return profile
    }
})

const selectLoginState = selector({
    key: 'selectLoginState',
    get: ({get}) => {
        const login = get(loginState)
        return login
    }
})

const selectProfilesState = selector({
    key: 'selectProfilesState',
    get: ({get}) => {
        const profiles = get(profilesState)
        return profiles
    }
})

const selectPostsState = selector({
    key: 'selectPostsState',
    get: ({get}) => {
        const posts = get(postsState)
        return posts
    }
})

export {
    selectAuthState,
    selectCredentialState,
    selectLoginState,
    selectProfileState,
    selectProfilesState,
    selectPostsState,
}