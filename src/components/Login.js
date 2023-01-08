// Library Imports
import { Link } from 'react-router-dom';

// Constant import
import { loginForm } from '../Constants';

// Login styling
import {
	Section,
	Form,
	Title,
	SubTitle,
	InputContainer,
	Label,
	Email,
	Password,
	Button,
	ErrorMessage
} from '../assets/login.styled';

const Login = ({ emailId, password, message, saveInputData, saveFormData }) => {
	return (
		<Section>
			<Form onSubmit={ saveFormData }>
				<Title>{ loginForm.title }</Title>
				<SubTitle>{ loginForm.subTitle }</SubTitle>
				<InputContainer>
					<Label>{ loginForm.label[0] }</Label>
					<Email
						type={ loginForm.input.type[0] }
						name={ loginForm.input.name[0] }
						placeholder={ loginForm.input.placeholder[0] }
						value={ emailId }
						onChange={ saveInputData }	
						message={ message[loginForm.input.name[0]] }				
						required />
					{ 
						message[loginForm.input.name[0]] && 
						<ErrorMessage>
						{ message[loginForm.input.name[0]] }
						</ErrorMessage> 
					}
				</InputContainer>
				<InputContainer>
					<Label>{ loginForm.label[1] }</Label>
					<Password
						type={ loginForm.input.type[1] }
						name={ loginForm.input.name[1] }
						placeholder={ loginForm.input.placeholder[1] }
						value={ password }
						onChange={ saveInputData }
						message={ message[loginForm.input.name[1]] }
						required />
					{ 
						message[loginForm.input.name[1]] && 
						<ErrorMessage>
						{ message[loginForm.input.name[1]] }
						</ErrorMessage> 
					}
				</InputContainer>
				<InputContainer>
					<Link to={ loginForm.link[0].url }>
						{ loginForm.link[0].title }
					</Link>
				</InputContainer>
				<InputContainer>
					<Button
						type={ loginForm.input.type[2] }
						name={ loginForm.input.name[2] }
						value={ loginForm.label[2] } />
				</InputContainer>
				<InputContainer>
					<Link to={ loginForm.link[1].url }>
						{ loginForm.link[1].title }
					</Link>
				</InputContainer>
			</Form>
		</Section>
	)
};

export default Login;