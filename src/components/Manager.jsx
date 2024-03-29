import React, { useEffect, useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();

    const [form, setForm] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setPasswordArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords));
        }
    }, []);

    const copyText = (text) => {

        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });

        navigator.clipboard.writeText(text);
    };

    const showPassword = () => {
        passwordRef.current.type = "text";
        if (ref.current.src.includes("icons/eye.png")) {
            ref.current.src = "icons/eyeclosed.png";
            passwordRef.current.type = "text";
        } else {
            ref.current.src = "icons/eye.png";
            passwordRef.current.type = "password";
        }
    };

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
            console.log([...passwordArray, form]);
            setForm({ site: "", username: "", password: "" })
            toast.success('Password Saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
        else {
            toast.warn("Fill all the required fields !", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    };

    const deletePassword = (id) => {
        console.log("Deleting password with id:", id)
        let c = confirm("do you really  want to delete this password?");
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast.success('Password Deleted Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    };

    const editPassword = (id) => {
        console.log("Editing password with id:", id)
        setForm(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id));

    };
    const truncateText = (text) => {
        return text.length > 10 ? text.slice(0, 5) + '...' : text;
    };


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    };

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="mycontainer pt-0 pb-5">
                {/* Your other JSX content */}
            </div>

            {/* Background from - https://bg.ibelick.com/ */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

            <div className="p-2 md:mycontainer " >
                <h1 className='text-4xl font-bold text-center'>
                    <span className="text-green-700">&lt;</span>
                    <img className="inline-block h-8 w-8" src="/icons/key.png" alt="Key Icon" />
                    Cipher
                    <span className="text-green-700">key /</span>
                    <span className="text-green-700">&gt;</span>
                </h1>
                <p className='text-green-600 text-lg text-center'>Your own password manager</p>
                <p className='font-bold text-center text-gray-700 '>Manage your Passwords safely here</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="username" id="username" />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1 mr-5' type="password" name="password" id="password" />
                            <span className='absolute right-[6px] top-[3px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={30} src="icons/eye.png" alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center gap-2 items-center bg-green-700 text-white hover:bg-green-500  rounded-full px-4 py-2 w-fit border border-green-900'>
                        <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>Save Password
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl text-center py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-center'>No Passwords to Show</div>}
                    {passwordArray.length !== 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden mb-6 ">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => (
                                    <tr key={index}>
                                        <td className='py-2 border border-white text-center overflow-hidden'>
                                            <div className='flex items-center justify-center'>
                                                <a href={item.site} target='_blank' className="truncate" style={{ maxWidth: '6rem' }}>{truncateText(item.site)}</a>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.site)}>
                                                    <lord-icon style={{ width: "25px", height: "25px", paddingTop: "3px" }} className="cursor-pointer w-5"
                                                        src="https://cdn.lordicon.com/vdjwmfqs.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        <td className='py-2 border border-white text-center overflow-hidden'>
                                            <div className='flex items-center justify-center'>
                                                <a href={item.username} target='_blank' className="truncate" style={{ maxWidth: '6rem' }}>{truncateText(item.username)}</a>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.username)}>
                                                    <lord-icon style={{ width: "25px", height: "25px", paddingTop: "3px" }} className="cursor-pointer w-5"
                                                        src="https://cdn.lordicon.com/vdjwmfqs.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 border border-white text-center overflow-hidden'>
                                            <div className='flex items-center justify-center'>
                                                <a href={item.password} target='_blank' className="truncate" style={{ maxWidth: '6rem' }}>{truncateText(item.password)}</a>
                                                <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.password)}>
                                                    <lord-icon style={{ width: "25px", height: "25px", paddingTop: "3px" }} className="cursor-pointer w-5"
                                                        src="https://cdn.lordicon.com/vdjwmfqs.json"
                                                        trigger="hover">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' justify-center py-2 border border-white text-center'>
                                            <span className='cursor-pointer mx-2' onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/wuvorxbv.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    state="hover-line"
                                                    colors="primary:#000000,secondary:#000000"
                                                    style={{ width: "25px", height: "25px", paddingTop: "3px" }}>

                                                </lord-icon>
                                            </span>
                                            <span className='cursor-pointer mx-2' onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    state="hover-line"
                                                    colors="primary:#000000,secondary:#000000"
                                                    style={{ width: "25px", height: "25px", paddingTop: "3px" }}>

                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    );
}

export default Manager;
