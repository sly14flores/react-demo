import { selector } from 'recoil';
import {
    authState,
    profileState,
    profilesState,
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

const selectProfilesState = selector({
    key: 'selectProfilesState',
    get: ({get}) => {
        const profiles = get(profilesState)
        return profiles
    }
})

export {
    selectAuthState,
    selectCredentialState,
    selectProfileState,
    selectProfilesState,
}