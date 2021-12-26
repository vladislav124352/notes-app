import React from 'react';
import { Grid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { GoHome } from './GoHome/GoHome';
import { SearchPanel } from './SearchPanel/SearchPanel';
import { ControlPanel } from './ControlPanel/ControlPanel';

export const Header = () => {
	const templateColumns = useBreakpointValue({
		base: '40px 1fr auto',
		lg: '220px 4fr auto'
	});

	return (
		<Grid
			gap='15px'
			as='header'
			width='100%'
			boxShadow='xs'
			paddingX='15px'
			paddingY='10px'
			position='fixed'
			bgColor='#ffffff'
			templateColumns={templateColumns}>
			<GoHome />
			<SearchPanel />
			<ControlPanel />
		</Grid>
	)
}