// Library Import
import styled from 'styled-components';

// Constant import
import { colors, fonts } from '../Constants';

const Section = styled.section`
	background-color: ${colors.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Form = styled.form`
	background-color: ${colors.white};
	border-radius: 0.5rem;
	box-shadow: 0 10px 20px rgba(0,0,0,0.2);
	padding: 2rem;
	width: 100%;
	max-width: 414px;
	display: flex;
	gap: 2rem;
	flex-direction: column;
`;

const Title = styled.h1`
	text-transform: capitalize;
`;

const SubTitle = styled.p`
	color: ${colors.darkerGray};
	font-family: ${fonts.primary};
`;

const InputContainer = styled.div`
	display: flex;
	gap: 0.375rem;
	flex-direction: column;
	position: relative;
`;

const Label = styled.label`
	font-weight: 600;
	text-transform: uppercase;
	color: ${colors.primary};
	font-size: 0.875rem;
`;

const Input = styled.input`
	padding: 1rem;
	border: 1px solid ${colors.lighterGray};
	transition: all 0.2s;

	:focus {
		border-color: ${colors.darkGray};
	}
`;

const Email = styled(Input)`
	border-color: ${props => props.message ? colors.error : colors.darkGray};
`;

const Password = styled(Input)`
	border-color: ${props => props.message ? colors.error : colors.darkGray};
`;

const Button = styled(Input)`
	background-color: ${colors.primary};
	color: ${colors.white};
	border: 0;
	cursor: pointer;
	text-transform: uppercase;
	font-weight: 600;
`;

const ErrorMessage = styled.span`
	color: ${colors.error};
	position: absolute;
	bottom: -1.75rem;
	right: 0;
	font-size: 0.875rem;
`;

export { 
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
};