import { Link, useHistory } from 'react-router-dom';
import InputField from '../components/InputField'
import ButtonPrimary from '../components/ButtonPrimary'
import ErrorMessage from '../components/ErrorMessage'
import Footer from '../components/Footer'
import useValidation from '../hooks/useValidation';
import { authState } from '../store/atoms'
import { selectProfilesState } from '../store/selectors';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';

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

    const setAuth = useSetRecoilState(authState);
    const profiles = useRecoilValue(selectProfilesState);
    const [invalidCredential, setInvalidCredential] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const history = useHistory()

    useEffect(() => {
        console.log(profiles)
    },[profiles])

    const loginUser = (values) => {

        setSubmitting(true)
        setInvalidCredential(false)

        // Check credential
        const i = profiles.findIndex(profile => 
            profile.username === values.username &&
            profile.password === values.password
        )

        if (i>=0) {
            setAuth({isLogin: true})
            setTimeout(() => {
                setSubmitting(false)
                history.push("/")
            }, 1000)
        } else {
            setSubmitting(false)
            setInvalidCredential(true)
        }
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
                        {
                            invalidCredential && <span className="inline-block mb-4"><ErrorMessage message="Username or password provided is invalid" /></span>
                        }
                        <div className="flex items-center justify-between">
                            <ButtonPrimary
                                type="button"
                                onClick={submitForm}
                                loading={submitting}
                            >Sign In</ButtonPrimary>
                            <Link
                                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                                to="/register"
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                    <Footer />
            </div>
            </div>
        </div>
    )

}

export default Login