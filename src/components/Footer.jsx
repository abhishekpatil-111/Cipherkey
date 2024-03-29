import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full mt-6 '>
            <div className="logo font-bold text-2xl">
                <span className="text-green-700">&lt;</span>
                <img className="inline-block h-8 w-8" src="/icons/key.png" alt="Key Icon" />
                Cipher
                <span className="text-green-700">key /</span>
                <span className="text-green-700">&gt;</span>
            </div>
            <div className='flex justify-center items-center w-full'>
                {/* <lord-icon
                    src="https://cdn.lordicon.com/nvrrlies.json"
                    trigger="loop"
                    delay="1000"
                    state="morph-code"
                    colors="primary:#121331,secondary:#3a3347,tertiary:#ebe6ef,quaternary:#16c72e,quinary:#ffc738,senary:#f24c00">
                </lord-icon> */}
                Created with 
                <lord-icon
                    src="https://cdn.lordicon.com/igciyimj.json"
                    trigger="loop"
                    delay="2000"
                    stroke="light"
                    state="morph-glitter"
                    colors="primary:#121331,secondary:#c71f16,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#f24c00,senary:#ebe6ef">
                </lord-icon> 
                By &nbsp;
                <a href='https://abhishek-patil-official.netlify.app/'>
                <span className='font-bold'>Abhishek Patil</span>
                </a>
                <a title='follow on Linkedin' href="https://www.linkedin.com/in/abhishek-patil-a46621229/">
                    <img className='ml-1 mb-2' src="/icons/linkedin.png" alt="" style={{ width: "30px", height: "30px", paddingTop: "3px", }} />
                </a>

                {/* <a title='follow on instagram' href='https://www.instagram.com/abhie_patil_7917?igsh=MXg2MjdsOHdsam96OQ=='>
                    <img className='ml-2 mb-2' src="/icons/instagram.png" alt="" style={{ width: "30px", height: "31px", paddingTop: "3px", }} />
                </a> */}

            </div>
        </div>
    )
}

export default Footer
