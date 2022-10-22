import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Pages/Context/UseContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const { currentUser, setCurrentUser } = useState('')
    const handelLogOut = () => {
        logOut()
        .then(result => {
            const user = result.user
            console.log(user.uid);
          }).catch((error) => {
            console.log(error.code);
          });
    }    

    return (
        <div className='px-2 lg:px-[10%] bg-gray-100'>
            <div className="navbar px-0 block  bg-gray-100">
                <div className=" flex justify-between">

                    <div className="dropdown block">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[290px] text-center">
                            <li>
                                <NavLink to='/home'>Home</NavLink>
                            </li>
                            <>
                                <li>
                                    <NavLink to='/sing-up'>Sing Up</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/sing-in'>Sing In</NavLink>
                                </li>
                            </>
                            <li>
                                <NavLink to='/statistics'>Statistics </NavLink>
                            </li>
                            <li>
                                <NavLink to='/blog'>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl lg:hidden  flex">Quizzes</Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-between">
                    <Link to='/' className="btn btn-ghost normal-case text-xl lg:flex hidden ">Quizzes</Link>
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sing-in'>Sing In</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sing-up'>Sing Up</NavLink>
                        </li>
                        <li>
                            <NavLink to='/statistics'>Statistics </NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog'>Blog</NavLink>
                        </li>

                        {/* <NavLink to='/blog'>{user?.displayName}</NavLink> */}
                        {/* //     </li>
                            //     <li>
                            //         <NavLink to='/blog'>{user?.email}</NavLink>
                                </li>
                            // </> */}
                    </ul>
                    {user?.uid &&
                        <>
                            <div   className="avatar">
                                {user.uid && <p>SuccessFull Login</p>}
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src=" https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <ul id='profile' className=" absolute top-12 right-20 menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                {user?.displayName &&
                                    <li><Link>{user?.displayName}</Link></li>
                                }
                                <li><Link>View Profile</Link></li>
                                <li><Link onClick={handelLogOut}>Log Out</Link></li>
                            </ul>
                        </>
                    }
                </div>
            </div >
        </div >
    );
};

export default Navbar;