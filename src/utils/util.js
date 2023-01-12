//	Constant import
import { defaultHeaders } from '../Constants';

//	Checks only uppercase or lowercase letters or space
export const checkOnlyLetters = (string) => {
	return /[^a-z\s]/i.test(string);
};

//	Checks at least one spl character, one uppercase, one lowercase and a number
export const checkPassword = (password) => {
	const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
	return pattern.test(password);
};

//	Fetch API call with abort controller
export const serviceRequest = async (endPoint, headers, data) => {
	const requestHeaders = {...defaultHeaders, ...headers};
	const controller = new AbortController();
	const signal = controller.signal;
	const options = {
		method: 'POST',
		headers: requestHeaders,
		body: JSON.stringify(data),
	}

	setTimeout(() => controller.abort(), 3000);

	await fetch(endPoint, options, { signal })
	.then(response => {
	    if (!response.ok) {
	      	throw Error(`HTTP error: ${response.status}`);
	    }
	    return response.json();
  	})
  	.then(res => {
  		console.log(res)
  	})
  	.catch((err) => {
    	console.log(err.message)
  	});
}