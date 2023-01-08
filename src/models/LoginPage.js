// Library Import
import { useState, useEffect } from 'react';

// Component Import
import Login from '../components/Login';

// Constant import
import { loginForm } from '../Constants';

const LoginPage = () => {
	const initInputData = {
		emailId: '',
		password: '',
		message: {
			emailId: null,
			password: null
		}
	};
	
	const [inputData, setInputData] = useState(initInputData);

	const saveInputData = (e) => {
		setInputData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value
		}));
	};

	const saveFormData = (e) => {
		e.preventDefault();

		if (inputData.emailId === "wrong@email.id") {
			setInputData((prevData) => ({
				...prevData,
				message: { 
					...prevData.message, 
					emailId: loginForm.message.emailId 
				}
			}));
		} else {
			setInputData((prevData) => ({
				...prevData,
				message: { 
					...prevData.message, 
					password: loginForm.message.password 
				}
			}));
		}
	};

	return (
		<Login {...inputData} {...{saveInputData}} {...{saveFormData}} />
	)
};

export default LoginPage;