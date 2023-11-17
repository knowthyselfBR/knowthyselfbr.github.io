import { useState, useRef, useEffect } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import React from 'react';
import ProjectsData from '../../data/ProjectsData'
import { Link } from 'react-router-dom';
import listenForOutsideClick from './listenForOutsideClicksFroDropdown';

function NavbarDropdown () {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = (isOpen) => {
        return setIsOpen(!isOpen)
      }

    // Hide Dropdown on Outside Click
    const menuRef = useRef(null)
    const [listening, setListening] = useState(false)
    useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen))

    return (
        <div className='text-xl font-bold text-indigo-500 dark:text-indigo-500 hover:text-indigo-800 dark:hover:text-white' ref={menuRef} >
            <button onClick={() => toggle(isOpen)} className='w-full flex items-center justify-between rounded-lg tracking-wider active:border-white duration-300 active:text-white'>
                Projects
                {!isOpen ? (
                    <AiOutlineCaretDown className='' />
                ): (
                    <AiOutlineCaretUp className='' />                
                )}
            </button>
            {isOpen && (
                <div onClick={() => toggle(isOpen)} className='bg-purple-300 dark:bg-purple-800 absolute flex flex-col items-start rounded-lg' >
                {ProjectsData.map((project, i) => (
                    <div className='flex w-full justify-between hover:bg-purple-200 hover:dark:bg-purple-700 cursor-pointer rounded-lg border-l-transparent hover:border-l-white border-l-4' key={i}>
                        <Link to={project.githubUrl} >
                            <h3 className='font-bold p-4'>{project.title}</h3>
                        </Link>
                    </div>
                ))}
                </div>
            )}
        </div>
    )
}

export default NavbarDropdown;