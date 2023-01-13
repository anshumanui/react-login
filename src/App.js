// Library Import
import { RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// Router import
import router from './router';

// Constant import
import { colors, fonts } from './Constants';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		outline: 0;
	}

	body {	
		font-weight: 400;
		color: ${colors.darkestGray};
		font-size: 0.95rem;
		line-height: 1.6;
		font-family: ${fonts.secondary};
	}

	input[type=text], input[type=email], input[type=password], input[type=submit] {
		border-radius: 0.25rem;
		font-family: ${fonts.secondary};
		font-size: 0.95rem;
		line-height: 1.6;

		:-internal-autofill-selected {
			-webkit-box-shadow: 0 0 0 50px ${colors.white} inset;
			-webkit-text-fill-color: ${colors.darkerGray};
		}
	}

	a {
		:link, :visited {
			text-decoration: none;
			color: ${colors.primary};
			text-transform: capitalize;
		}
	}

	h1, h2 {
		font-family: ${fonts.primary};
		font-weight: 700;
		color: ${colors.primary};
	}

	h1 {
		font-size: 2rem;
		position: relative;

		:before {
			content: '';
			height: 4px;
			width: 10%;
			left: 4%;
			position: absolute;
			bottom: -0.5rem;
			background-color: ${colors.primary};
		}
	}
`;

// Main App declaration with global styles
const App = () => {
	return (
		<main>
			<GlobalStyle />
			<RouterProvider router={router} />
		</main>
	)
};

export default App;