import { useRecoilValue } from 'recoil';
import { selectAuthState } from '../store/selectors';

const useAuth = () => {

    const isLogin = useRecoilValue(selectAuthState)

    return {
        isLogin
    }
}

export default useAuth