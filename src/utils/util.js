
export const checkOnlyLetters = (string) => {
	return /[^a-z\s]/i.test(string);
};

export const checkPassword = (password) => {
	const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
	return pattern.test(password);
};