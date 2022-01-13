import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';
import theme from './theme';
import '@fontsource/inter';
import './index.css'

const AppComponent = () => {
	return (
		<StrictMode>
			<ChakraProvider resetCSS theme={theme}>
				<Provider store={store}>
					<App />
				</Provider>
			</ChakraProvider>
		</StrictMode >
	)
}

render(<AppComponent />, document.getElementById('root'));
