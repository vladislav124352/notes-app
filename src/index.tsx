import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import theme from './theme';

const AppComponent = () => {
	return (
		<StrictMode>
			<ChakraProvider resetCSS theme={theme}>
				<App />
			</ChakraProvider>
		</StrictMode >
	)
}

render(<AppComponent />, document.getElementById('root'));
