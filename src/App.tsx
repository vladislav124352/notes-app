import React from 'react';
import { Grid } from '@chakra-ui/layout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Workboard from './components/Workboard';
import { useBreakpointValue } from '@chakra-ui/media-query';

const App = () => {
	const sidebarWidthBreakpoint = useBreakpointValue({ base: '70px 1fr', lg: '235px 1fr' })

	return (
		<Grid bgColor='#00000006' templateColumns='1fr' templateRows='60px 1fr' h='100vh'>
			<Header />
			<Grid as='main' templateColumns={sidebarWidthBreakpoint}>
				<Sidebar />
				<Workboard />
			</Grid>
		</Grid>
	);
}

export default App;
