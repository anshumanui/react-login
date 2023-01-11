// Constant import
import { defaultHeaders } from '../Constants';

export const checkOnlyLetters = (string) => {
	return /[^a-z\s]/i.test(string);
};

export const checkPassword = (password) => {
	const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
	return pattern.test(password);
};

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