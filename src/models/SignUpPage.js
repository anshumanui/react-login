//	Library Import
import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';

//	Component Import
import SignUp from '../components/SignUp';

//	Constant import
import { endPoints, signUpForm } from '../Constants';

//	Utils Import
import { 
	checkOnlyLetters, 
	checkPassword, 
	serviceRequest 
} from '../utils/util';


//	Sign up page model, contains only react logic
const SignUpPage = () => {
	//	Initial state declaration
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

	//	Save user entered input data
	const saveInputData = (e) => {
		setInputData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value
		}));
	};

	//	Validate the form data against the required format
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
	};

	//	Save form data upon submit
	const saveFormData = (e) => {
		e.preventDefault();

		const emailId = CryptoJS.AES.encrypt(inputData.emailId, 'mysecretkeyhere123456').toString();
		const hash = CryptoJS.SHA3(inputData.password, { outputLength: 512 });
		const password = Base64.stringify(hash);

		serviceRequest(endPoints.login, {password}, {emailId});
	};

	useEffect(() => {
		formValidation();
	}, [inputData.fullName, inputData.password]);

	return (
		<SignUp {...inputData} {...{saveInputData}} {...{saveFormData}} />
	)
};

export default SignUpPage;