import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Header } from './components/Header';
import { Workboard } from './components/Workboard';

const App = () => {
	return (
		<Box>
			<Header />
			<Box
				as='main'
				display='flex'
				height='100vh'
				paddingTop='60px'
				justifyContent='center'>
				<Workboard />
			</Box>
		</Box>
	);
}

export default App;
