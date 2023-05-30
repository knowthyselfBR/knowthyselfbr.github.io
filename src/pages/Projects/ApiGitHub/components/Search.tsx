type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { BsSearch } from "react-icons/bs";
import { useState, KeyboardEvent } from "react";

function Search ({loadUser}: SearchProps) {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(userName);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center">
                <h2 className="m-3 p-3 text-indigo-800 dark:text-indigo-300 italic font-semibold tracking-wider overline decoration-double uppercase">
                    Search Users
                </h2>
            </div>
            <div className="bg-slate-300 dark:bg-slate-800 text-gray-600 dark:text-gray-300 flex justify-center items-center rounded-lg ">
                <div className="inline-flex gap-1 min-w-full justify-center items-center m-1 p-1">
                    <input className="m-3 p-3 border-black border-2 text-sm md:text-md text-slate-900  dark:text-gray-300 dark:border-gray-400 rounded-md"
                        type="text" 
                        placeholder="Type the user name" 
                        onChange={(e) => setUserName(e.target.value)} 
                        onKeyDown={handleKeyDown}
                    />

                    <button className="m-3 p-3 cursor-pointer border-2 border-black dark:border-gray-400 rounded-md"
                        onClick={() => loadUser(userName)}
                    >
                        <BsSearch />
                    </button>
                </div>
            </div>
        </div>
    )

};
export default Search;