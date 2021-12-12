import '@fontsource/inter';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';

const AppComponent = () => {
	return (
		<StrictMode>
			<App />
		</StrictMode >
	)
}

render(<AppComponent />, document.getElementById('root'));
