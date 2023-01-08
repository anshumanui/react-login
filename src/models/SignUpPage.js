// Library Import
import { useState, useEffect } from 'react';

// Component Import
import SignUp from '../components/SignUp';

// Constant import
import { signUpForm } from '../Constants';

// Utils Import
import { checkOnlyLetters, checkPassword } from '../utils/util';

const SignUpPage = () => {
	const initInputData = {
		fullName: '',
		emailId: '',
		password: '',
		message: {
			fullName: null,
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

		
	};

	const formValidation = () => {
		let fullName = null;
		let password = null;

		if (inputData.fullName && checkOnlyLetters(inputData.fullName)) {
			fullName = signUpForm.message.fullName;
		}

		if (inputData.password && !checkPassword(inputData.password)) {
			password = signUpForm.message.password;
		}

		setInputData((prevData) => ({
			...prevData,
			message: {
				...prevData.message, 
				fullName: fullName,
				password: password
			}
		}));
	}

	useEffect(() => {
		formValidation();
	}, [inputData.fullName, inputData.password]);

	return (
		<SignUp {...inputData} {...{saveInputData}} {...{saveFormData}} />
	)
};

export default SignUpPage;