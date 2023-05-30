import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";

const User = ({login, avatar_url, followers, following, location}: UserProps) => {
    return (
        <div className="flex flex-col justify-center items-center dark:text-gray-300 gap-3 mt-5 pt-5">
            <img 
                className="object-center w-40 h-40 rounded-full"
                src={avatar_url} alt={login} 
            />
            <h2>{login}</h2>
            {location && (
                <p>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div>
                <div  className="flex gap-5 items-center">
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
            </div>
            <div>
                <div  className="flex gap-5 items-center">
                    <p>Following</p>
                    <p>{following}</p>
                </div>
            </div>
        </div>



    )
};

export default User;