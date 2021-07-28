import { Link, useHistory } from 'react-router-dom';
import InputField from '../components/InputField'
import ButtonPrimary from '../components/ButtonPrimary'
import useValidation from '../hooks/useValidation';
import { authState  } from '../store/atoms'
import { useRecoilState } from 'recoil';

const initCredential = {
    username: '',
    password: ''
}

const schema = {
    username: {
        required: true,
        message: "Username is required",
    },
    password: {
        required: true,
        message: "Password is required"
    },
}

const Login = () => {

    const [auth, setAuth] = useRecoilState(authState);    
    const history = useHistory()

    const loginUser = (values) => {

        // Check credential

        setAuth({isLogin: true})
        setTimeout(() => {
            history.push("/")
        }, 100)
    }

    const {
        handleField,
        values,
        errors,
        submitForm,
        // resetValidations
    } = useValidation({
        schema,
        initValues: initCredential,
        handler: loginUser
    })    

    return (
        <div className="mt-20">
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4" autoComplete="off">
                        <div
                            className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                        >
                            DICT Project
                        </div>
                        <InputField
                            className="mb-4"
                            type="text"
                            label="Username"
                            name="username"
                            value={values.username}
                            onChange={handleField}
                            autoFocus
                            placeholder="Username"
                            invalid={errors.username?.invalid}
                            invalidMessage={errors.username.message}
                        />
                        <InputField
                            className="mb-6"
                            type="password"
                            label="Password"
                            name="password"
                            value={values.password}
                            onChange={handleField}
                            placeholder="Password"
                            invalid={errors.password?.invalid}
                            invalidMessage={errors.password.message}                            
                        />
                        <div className="flex items-center justify-between">
                            <ButtonPrimary type="button" onClick={submitForm}>Sign In</ButtonPrimary>
                            <Link
                                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                                to="/register"
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy; 2021 slyflores. All rights reserved.
                </p>
            </div>
            </div>
        </div>
    )

}

export default Login