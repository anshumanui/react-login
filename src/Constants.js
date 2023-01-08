
export const colors = {
	primary: '#45aaf2',
	error: '#c0392b',
	darkestGray: '#222',
	darkerGray: '#444',
	darkGray: '#666',
	gray: '#888',
	lightGray: '#AAA',
	lighterGray: '#CCC',
	lightestGray: '#EEE',
	white: '#FFF'
};

export const fonts = {
	primary: `'Oxygen', sans-serif`,
	secondary: `'Open Sans', sans-serif`
};

export const loginForm = {
	title: 'login',
	subTitle: 'Welcome returning user, please log in!',
	message: {
		emailId: `Email doesn't exist!`,
		password: 'Invalid credentials!'
	},
	label: [
		'email',
		'password',
		'login'
	],
	input: {
		type: [
			'email',
			'password',
			'submit'
		],
		name: [
			'emailId',
			'password',
			'submitBtn'
		],
		placeholder: [
			'Enter Email',
			'Enter Password'
		]
	},
	link: [
		{
			title: 'forgot password?',
			url: 'forgot-password'
		}, {
			title: `Don't have an account? Sign up instead!`,
			url: 'signup'
		}
	]
};

export const signUpForm = {
	title: 'sign up',
	message: {
		fullName: `Please enter only letters!`,
		password: 'Password is not in the required format!'
	},
	label: [
		'full name',
		'email',
		'password',
		'create account'
	],
	input: {
		type: [
			'text',
			'email',
			'password',
			'submit'
		],
		name: [
			'fullName',
			'emailId',
			'password',
			'submitBtn'
		],
		placeholder: [
			'Enter Full Name',
			'Enter Email',
			'Create Password'
		]
	},
	link: [
		{
			title: `Already have an account? Login here!`,
			url: '/'
		}
	]
};