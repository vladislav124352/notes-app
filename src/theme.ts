import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: false
}

const fonts = {
	body: 'Roboto, sans-serif',
	heading: 'Inter, sans-serif',
}

const styles = {
	body: { padding: 0, margin: 0 },
	heading: { padding: 0 }
} 

const theme = extendTheme({
	config,
	fonts,
	styles
});

export default theme;