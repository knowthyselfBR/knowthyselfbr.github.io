import { UserProps } from "./types/user";
import { useState } from "react";
import Search from "./components/Search";
import User from "./components/User";
import Error from "./components/Error";

function ApiGitHubHome () {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false);

    const loadUser = async(userName: string) => {
        setError(false);
        setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if (res.status === 404) {
            setError(true);
            return;
        }

        const { avatar_url, login, location, followers, following } = data;
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };
        setUser(userData);
    };

    return (
        <div id='layout-container'className='bg-gradient-to-b from-slate-300 dark:from-slate-800 dark:to-slate-600 h-full'>
            <div className='p-10'>
                <div className='font-mono flex items-center flex-col p-12'>
                    <h1 className='text-2xl font-bold  text-indigo-700 dark:text-indigo-500 pb-2'>Github API</h1>
                </div>
                <Search loadUser={loadUser} />
                {user && <User {...user} />}
                {error && <Error />}   
            </div>
        </div>
    )
};

export default ApiGitHubHome;