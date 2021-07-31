import SUInputField from '../components/SUInputField'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import Footer from '../components/Footer'
import { useState } from 'react'
import useValidation from '../hooks/useValidation';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { profilesState } from '../store/atoms'
import { selectProfileState } from '../store/selectors'
import { Link, useHistory } from 'react-router-dom';
import useStorage from '../hooks/useStorage';

const schema = {
    firstname: {
        required: true,
        message: "First name is required"
    },
    lastname: {
        required: true,
        message: "Last name is required"
    },    
    username: {
        required: true,
        message: "Username is required",
    },
    password: {
        required: true,
        message: "Password is required"
    },
}

const SignUp = () => {

    const [agree, setAgree] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    
    const profile = useRecoilValue(selectProfileState)
    const setProfiles = useSetRecoilState(profilesState)

    const history = useHistory()

    const storage = useStorage()

    const handleAgree = (e) => {
        setAgree(e.target.checked)
    }

    const register = (values) => {
        setSubmitted(true)
        setTimeout(() => {
            if (agree) {
                setProfiles((oldProfiles) => {
                    const merged = [
                        ...oldProfiles, 
                        {
                            id: oldProfiles.length+1,
                            ...values
                        }
                    ]
                    storage.update('profiles',merged)
                    return merged
                })
                setTimeout(() => {
                    history.push("/login")                
                }, 1000);     
            }
        },1000)
    }

    const {
        handleField,
        values,
        errors,
        submitForm,
        // resetValidations,
        loading,
    } = useValidation({
        schema,
        initValues: profile,
        handler: register
    })     

    return (
        <div className="container max-w-full mx-auto md:py-2 px-6">
            <div className="max-w-sm mx-auto px-6">
                <div className="relative flex flex-wrap">
                    <div className="w-full relative">
                        <div className="md:mt-6">
                            <div className="text-2xl text-center font-semibold text-black">
                                Sign up for your account
                            </div>
                            <form className="mt-8">
                                <div className="mx-auto max-w-lg ">
                                    <SUInputField
                                        type="text"
                                        className="py-1"
                                        label="First Name"
                                        name="firstname"
                                        value={values.firstname}
                                        onChange={handleField}
                                        invalid={errors.firstname?.invalid}
                                        invalidMessage={errors.firstname?.message}
                                    />
                                    <SUInputField
                                        type="text"
                                        className="py-1"
                                        label="Last Name"
                                        name="lastname"
                                        value={values.lastname}
                                        onChange={handleField}
                                        invalid={errors.lastname?.invalid}
                                        invalidMessage={errors.lastname?.message}
                                    />
                                    <SUInputField
                                        type="text"
                                        className="py-1"
                                        label="Username"
                                        name="username"
                                        value={values.username}
                                        onChange={handleField}
                                        invalid={errors.username?.invalid}
                                        invalidMessage={errors.username?.message}
                                    />
                                    <SUInputField
                                        type="password"
                                        className="py-1"
                                        label="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleField}
                                        invalid={errors.password?.invalid}
                                        invalidMessage={errors.password?.message}
                                    />
                                    {!agree && submitted && <ErrorMessage message="You to accept the Terms and Conditions" />}
                                    <div className="flex justify-start">
                                        <label className="text-gray-500 font-bold my-4 flex items-center">
                                            <input className="leading-loose text-pink-600 top-0" type="checkbox" checked={agree} onChange={handleAgree} />
                                            <span className="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                                <a href="#!" className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                                    Terms and Conditions of the site
                                                </a>
                                                &nbsp;and&nbsp;
                                                <a href="#!" className="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                                    the information data policy.
                                                </a>
                                            </span>
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        className="mt-3 text-lg font-semibold bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white"
                                        onClick={submitForm}
                                    >
                                        {
                                            loading && <span className="inline-block"><Spinner /></span>
                                        }
                                        Register
                                    </button>
                                    <Link
                                        to="/login"
                                        className="mt-3 text-lg text-center font-semibold bg-pink-500 hover:bg-pink-600 focus:bg-pink-700 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-9"><Footer /></div>
        </div>
    )

}

export default SignUp