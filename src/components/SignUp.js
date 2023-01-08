// Library Imports
import { Link } from 'react-router-dom';

// Constant import
import { signUpForm } from '../Constants';

// Login styling
import {
	Section,
	Form,
	Title,
	InputContainer,
	Label,
	Name,
	Email,
	Password,
	Button,
	ErrorMessage
} from '../assets/signup.styled';

const SignUp = ({ fullName, emailId, password, message, saveInputData, saveFormData }) => {
	return (
		<Section>
			<Form onSubmit={ saveFormData }>
				<Title>{ signUpForm.title }</Title>
				<InputContainer>
					<Label>{ signUpForm.label[0] }</Label>
					<Name
						type={ signUpForm.input.type[0] }
						name={ signUpForm.input.name[0] }
						placeholder={ signUpForm.input.placeholder[0] }
						value={ fullName }
						onChange={ saveInputData }	
						message={ message[signUpForm.input.name[0]] }				
						required />
					{ 
						message[signUpForm.input.name[0]] && 
						<ErrorMessage>
						{ message[signUpForm.input.name[0]] }
						</ErrorMessage> 
					}
				</InputContainer>
				<InputContainer>
					<Label>{ signUpForm.label[1] }</Label>
					<Email
						type={ signUpForm.input.type[1] }
						name={ signUpForm.input.name[1] }
						placeholder={ signUpForm.input.placeholder[1] }
						value={ emailId }
						onChange={ saveInputData }
						message={ message[signUpForm.input.name[1]] }
						required />
					{ 
						message[signUpForm.input.name[1]] && 
						<ErrorMessage>
						{ message[signUpForm.input.name[1]] }
						</ErrorMessage> 
					}
				</InputContainer>
				<InputContainer>
					<Label>{ signUpForm.label[2] }</Label>
					<Password
						type={ signUpForm.input.type[2] }
						name={ signUpForm.input.name[2] }
						placeholder={ signUpForm.input.placeholder[2] }
						value={ password }
						onChange={ saveInputData }
						message={ message[signUpForm.input.name[2]] }
						required />
					{ 
						message[signUpForm.input.name[2]] && 
						<ErrorMessage>
						{ message[signUpForm.input.name[2]] }
						</ErrorMessage> 
					}
				</InputContainer>
				<InputContainer>
					<Button
						type={ signUpForm.input.type[3] }
						name={ signUpForm.input.name[3] }
						value={ signUpForm.label[3] } />
				</InputContainer>
				<InputContainer>
					<Link to={ signUpForm.link[0].url }>
						{ signUpForm.link[0].title }
					</Link>
				</InputContainer>
			</Form>
		</Section>
	)
};

export default SignUp;