import React, { useState, useEffect, createContext, useMemo } from 'react';
import {useNavigate } from 'react-router-dom';

import {login as loginService } from './AuthService';


export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	// debugger
	const [currentUser, setCurrentUser] = useState(null);
	const nav = useNavigate();

	// useEffect(() => {
	// debugger
	const login = async (
		{ email, password}
	) => {
		let cuser = await loginService({ email, password});
		console.log("cuser====.......", cuser);
		if (!cuser) {
			localStorage.setItem('token', '');
			cuser = null;
		}

		setCurrentUser(cuser);
		console.log("cuser====.........", cuser);
	};
	// checkLoggedIn();
	// }, []);
	console.log('usercontext====', currentUser);

	const value = useMemo(
		() => ({
			currentUser,
			setCurrentUser,
			login
		}), [currentUser]);
	return (
		<UserContext.Provider value={value}>
			{children}
		</UserContext.Provider>
	);
};


// export default UserContext;