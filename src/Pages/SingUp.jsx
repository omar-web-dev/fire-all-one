import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import { AuthContext } from './Context/UseContext';

const SingUp = () => {

    useTitle('Resignation')
    const {createUser, userProfileUpdate, emailVerification} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [status, setStatus] = useState('')
    console.log(status); 
    console.log(error);
    

    const handelSignUp = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const photo_url = from.photo_url.value
        const email = from.email.value
        const password = from.password.value
        

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please send a valid email')
            return;
        }

        emailVerification()
        .then((result) => {
            const user = result.user
            console.log('Email verification sent!',user)
            // ...
          });
        
        const handelUpdateProfile = (name, photo_url) => {
            const profile = {
                displayName: name, 
                photoURL: photo_url
            }
            userProfileUpdate(profile)
            .then(() => {
                setStatus('Profile updated!')
              }).catch((error) => {
                setError(error.code)
              });
            
        }
        createUser(email, password)
        .then(result =>{
            const userInfo = result.user
            console.log(userInfo);
            handelUpdateProfile(name, photo_url)
        })
        .catch(error => setError(error.code))
        setError('')
        setEmail(email)
    }
    return (
        <div className='sign-up-page'>
            <section className="bg-[#F4F7FF] py-5 ">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]"
                            >
                                <div className="mb-5 text-center md:mb-10">
                                    <Link to='/' className="mx-auto inline-block max-w-[160px]" >
                                        <img src={'https://i.ibb.co/bBYvKvD/logo.png'} alt="logo" />
                                    </Link>
                                </div>
                                <form onSubmit={handelSignUp}>
                                    <div className="mb-6">
                                        <input type="text"
                                            name='name'
                                            placeholder="Name"
                                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name='photo_url'
                                            placeholder="Photo URL"
                                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                        <div className='flex justify-between mt-3'>
                                            <p className='text-red-200'>Have a photo URL? </p>
                                            <button className="btn btn-xs btn-outline btn-info">
                                                <a href="https://postimages.org/" target="_blank" rel="noopener noreferrer">No</a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            name='email'
                                            type="email"
                                            placeholder="email"
                                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            name='password'
                                            type="password"
                                            placeholder="Password"
                                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-10">
                                        <button
                                            type="submit"
                                            value="Sign In"
                                            className="bg w-full cursor-pointer rounded-md border bg-primary p-3 transition hover:bg-opacity-90 text-white text-md"
                                        >SUBMIT</button>
                                    </div>
                                </form>
                                <p className="text-base text-[#adadad]">
                                    Have a account?
                                    <Link
                                        to='/'
                                        className="text-primary hover:underline"
                                    >Sign In</Link>
                                </p>

                                <div>
                                    <span className="absolute top-1 right-1">
                                        <svg
                                            width="40"
                                            height="40"
                                            viewBox="0 0 40 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="1.39737"
                                                cy="38.6026"
                                                r="1.39737"
                                                transform="rotate(-90 1.39737 38.6026)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.39737"
                                                cy="1.99122"
                                                r="1.39737"
                                                transform="rotate(-90 1.39737 1.99122)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="13.6943"
                                                cy="38.6026"
                                                r="1.39737"
                                                transform="rotate(-90 13.6943 38.6026)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="13.6943"
                                                cy="1.99122"
                                                r="1.39737"
                                                transform="rotate(-90 13.6943 1.99122)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="25.9911"
                                                cy="38.6026"
                                                r="1.39737"
                                                transform="rotate(-90 25.9911 38.6026)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="25.9911"
                                                cy="1.99122"
                                                r="1.39737"
                                                transform="rotate(-90 25.9911 1.99122)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="38.288"
                                                cy="38.6026"
                                                r="1.39737"
                                                transform="rotate(-90 38.288 38.6026)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="38.288"
                                                cy="1.99122"
                                                r="1.39737"
                                                transform="rotate(-90 38.288 1.99122)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.39737"
                                                cy="26.3057"
                                                r="1.39737"
                                                transform="rotate(-90 1.39737 26.3057)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="13.6943"
                                                cy="26.3057"
                                                r="1.39737"
                                                transform="rotate(-90 13.6943 26.3057)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="25.9911"
                                                cy="26.3057"
                                                r="1.39737"
                                                transform="rotate(-90 25.9911 26.3057)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="38.288"
                                                cy="26.3057"
                                                r="1.39737"
                                                transform="rotate(-90 38.288 26.3057)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="1.39737"
                                                cy="14.0086"
                                                r="1.39737"
                                                transform="rotate(-90 1.39737 14.0086)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="13.6943"
                                                cy="14.0086"
                                                r="1.39737"
                                                transform="rotate(-90 13.6943 14.0086)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="25.9911"
                                                cy="14.0086"
                                                r="1.39737"
                                                transform="rotate(-90 25.9911 14.0086)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="38.288"
                                                cy="14.0086"
                                                r="1.39737"
                                                transform="rotate(-90 38.288 14.0086)"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                    <span className="absolute left-1 bottom-1">
                                        <svg
                                            width="29"
                                            height="40"
                                            viewBox="0 0 29 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="2.288"
                                                cy="25.9912"
                                                r="1.39737"
                                                transform="rotate(-90 2.288 25.9912)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="14.5849"
                                                cy="25.9911"
                                                r="1.39737"
                                                transform="rotate(-90 14.5849 25.9911)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="26.7216"
                                                cy="25.9911"
                                                r="1.39737"
                                                transform="rotate(-90 26.7216 25.9911)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="2.288"
                                                cy="13.6944"
                                                r="1.39737"
                                                transform="rotate(-90 2.288 13.6944)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="14.5849"
                                                cy="13.6943"
                                                r="1.39737"
                                                transform="rotate(-90 14.5849 13.6943)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="26.7216"
                                                cy="13.6943"
                                                r="1.39737"
                                                transform="rotate(-90 26.7216 13.6943)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="2.288"
                                                cy="38.0087"
                                                r="1.39737"
                                                transform="rotate(-90 2.288 38.0087)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="2.288"
                                                cy="1.39739"
                                                r="1.39737"
                                                transform="rotate(-90 2.288 1.39739)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="14.5849"
                                                cy="38.0089"
                                                r="1.39737"
                                                transform="rotate(-90 14.5849 38.0089)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="26.7216"
                                                cy="38.0089"
                                                r="1.39737"
                                                transform="rotate(-90 26.7216 38.0089)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="14.5849"
                                                cy="1.39761"
                                                r="1.39737"
                                                transform="rotate(-90 14.5849 1.39761)"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="26.7216"
                                                cy="1.39761"
                                                r="1.39737"
                                                transform="rotate(-90 26.7216 1.39761)"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SingUp;