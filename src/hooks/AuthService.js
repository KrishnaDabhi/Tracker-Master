
import axios from "axios";

export const login = async ({ email, password }) => {

	try {
		const response = await fetch('http://192.168.29.78:7000/login',
			{
				"method": 'POST',
				"headers": {
					'Content-Type': 'application/json',

				},
				"body": JSON.stringify(
					{
						email,
						password
					})
			});

		const token = await response.json();
		const t = token.data.token;
		console.log("token....", t);
		const all = token.data.user.name;
		console.log("all....", all);
		console.log("email.....",token.data.user.email);

		// if (!token) {
		// 	return { statusCode: 500, data: null };
		//   }
	  
		//   if (!response.data) {
		// 	return { statusCode: 500, data: null };
		//   }
	  
		//   if (!response.data.data.accessToken) {
		// 	return { statusCode: 500, data: null };
		//   }

		  
		if (token) {
			localStorage.setItem('token', JSON.stringify(t));
			localStorage.setItem('login_id', JSON.stringify(token.data.user._id));
			localStorage.setItem('username', JSON.stringify(token.data.user.name));
			localStorage.setItem('email', JSON.stringify(token.data.user.email));
			localStorage.setItem('role', JSON.stringify(token.data.user.role));
			console.log("hhh",token.data.user.role)
			console.log("nnn",token.data.user.name)
		}
		return token;
	}
	catch (error) {
		console.log(error);
		return { statusCode: error.response.data.message, data: null };
	}
};

export const isAuthenticated = () => {

	const user = localStorage.getItem('token');
	console.log("get token..........", user);
	if (!user) {
		return {}
	}

	return JSON.parse(user);

	// const user = localStorage.getItem('user');
	// console.log("get token",user);
	// console.log("user isAuthenticated====", user);
	// if (user!=null) {
	// 	return true;
	// }
	// else
	// {
	// 	return false;
	// }

	// return JSON.parse(user);
};