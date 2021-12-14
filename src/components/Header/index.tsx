import React from 'react';
import { Grid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { GoHome } from './GoHome/GoHome';
import { SearchInput } from './SearchInput/SearchInput';
import { ControlPanel } from './ControlPanel/ControlPanel';

const Header = () => {
	const gridBreakpoint = useBreakpointValue({
		base: '40px 1fr 90px',
		lg: '220px 5fr 90px'
	});

	return (
		<Grid
			px='15px'
			py='10px'
			gap='15px'
			as='header'
			width='100%'
			boxShadow='xs'
			position='fixed'
			bgColor='#ffffff'
			templateColumns={gridBreakpoint}>
			<GoHome />
			<SearchInput />
			<ControlPanel />
		</Grid>
	)
}

export default Header;