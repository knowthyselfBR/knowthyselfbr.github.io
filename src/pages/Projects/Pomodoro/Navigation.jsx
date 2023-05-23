import React from "react";
import { FiSettings } from "react-icons/fi";
import { GiTomato } from "react-icons/gi";



function Navigation({ setOpenSetting }) {
	return (
		<nav className="pt-5 font-semibold  text-indigo-700 dark:text-indigo-500 flex justify-between w-11/12 mx-auto">
			<div className="flex items-center gap-1 text-2xl cursor-pointer">
				<GiTomato className="text-2xl" />
				<h1>Pomodoro</h1>
			</div>
			<FiSettings
				className="text-2xl cursor-pointer"
				onClick={() => setOpenSetting((value) => !value)}
			/>
		</nav>
	);
}
export default React.memo(Navigation);