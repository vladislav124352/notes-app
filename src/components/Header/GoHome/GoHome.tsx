import React from 'react'
import { Box, Grid, Heading, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import NotesAppIcon from '../images/NotesApp-icon.svg';
import { Image } from '@chakra-ui/image';
import { useBreakpointValue } from '@chakra-ui/media-query';

export const GoHome = () => {
    const logoTextDisplayBreakpoint = useBreakpointValue({ base: 'none', lg: 'flex' })
    const goHomeGridBreakpoint = useBreakpointValue({ base: '40px', lg: '40px 1fr' })

    return (
        <LinkBox rounded='md'>
            <Grid templateColumns={goHomeGridBreakpoint} gap='15px' h='100%'>
                <Image
                    borderRadius='full'
                    boxSize='40px'
                    src={NotesAppIcon}
                    alt='Notes app logo' />
                <Box
                    d='flex'
                    alignItems='center'
                    display={logoTextDisplayBreakpoint}>
                    <LinkOverlay href='/' aria-label='Go home'>
                        <Heading h='100%' as='h1' fontSize='26px'>
                            Best Notes
                        </Heading>
                    </LinkOverlay>
                </Box>
            </Grid>
        </LinkBox>
    )
}
