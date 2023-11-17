import React from 'react';
import profilePic from '../../../assets/images/aiimg.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function HomeLinktreeClone () {

    const links = [
        {
            url: 'https://github.com/knowthyselfBR',
            title: 'Github',
            icon: <FaGithub />,
        },
        {
            url: 'https://www.instagram.com/rd.dev.2022/',
            title: 'Instagram',
            icon: <FaInstagram />,
        },
        {
            url: 'https://www.linkedin.com/in/rafael-duarte-dv2022/',
            title: 'Linkedin',
            icon: <FaLinkedin />,
        },
    ]

    return (
        <div id='layout-container'className='font-mono bg-gradient-to-b from-slate-300 dark:from-slate-800 dark:to-slate-600 grid place-items-center h-full'>
            <div id='layout-container-inside' className='container mx-auto w-11/12'>
                <div className='flex items-center justify-center flex-col pb-20'>
                    <img src={profilePic} className='profile-pic object-center w-40 h-40 rounded-full' alt='Profile Picture' />
                </div>
                <div className='grid grid-cols-1'>
                    <ul className='row-auto'>
                        {
                            links.map((link, index) => (
                                <li key={index} className='cursor-pointer m-4 p-5 border-black border-2 text-sm md:text-md text-slate-900  dark:text-gray-300 dark:border-gray-400 hover:-translate-x-2 transform transition rounded-md'>
                                    <a href={link.url} className='flex items-center justify-center' title={link.title} target="_blank" rel='noreferrer'>
                                    {link.icon} <p className='ml-4 '>{link.title}</p>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HomeLinktreeClone;