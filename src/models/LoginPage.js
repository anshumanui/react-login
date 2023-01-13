// Library Import
import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';

// Component Import
import Login from '../components/Login';

// Constant import
import { endPoints, loginForm } from '../Constants';

//	Utils Import
import { serviceRequest } from '../utils/util';


//	Login page model, contains only react logic
const LoginPage = () => {
	//	Initial state declaration
	const initInputData = {
		emailId: '',
		password: '',
		message: {
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

	//	Save form data upon submit
	const saveFormData = async (e) => {
		e.preventDefault();

		const emailId = CryptoJS.AES.encrypt(inputData.emailId, 'mysecretkeyhere123456').toString();
		const hash = CryptoJS.SHA3(inputData.password, { outputLength: 512 });
		const password = Base64.stringify(hash);

		const requestHeaders = {password};
		const requestBody = {emailId};

		const response = await serviceRequest(endPoints.login, requestHeaders, requestBody);

		if (response && response.status === 'error') {
			setInputData((prevData) => ({
				...prevData,
				message: {
					...prevData.message, 
					emailId: response.emailId
				}
			}));
		}
	};

	return (
		<Login {...inputData} {...{saveInputData}} {...{saveFormData}} />
	)
};

export default LoginPage;