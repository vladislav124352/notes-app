import React from 'react'
import { Box, Grid, Heading, Link, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import NotesAppIcon from '../images/NotesApp-icon.svg';
import { Image } from '@chakra-ui/image';
import { useBreakpointValue } from '@chakra-ui/media-query';

export const GoHome = () => {
    const isCollapseGoHome = useBreakpointValue({ base: true, lg: false })

    return isCollapseGoHome
        ? <Link href='/' aria-label='Go home' borderRadius='full'>
            <Image boxSize='40px' src={NotesAppIcon} alt='Notes app logo' />
        </Link>

        : <LinkBox rounded='md'>
            <Grid templateColumns='40px 1fr' gap='15px'>
                <Image
                    boxSize='40px'
                    src={NotesAppIcon}
                    alt='Notes app logo' />
                <Box display='flex' alignItems='center'>
                    <LinkOverlay href='/' aria-label='Go home'>
                        <Heading
                            as='h1'
                            height='100%'
                            fontSize='26px'>
                            BestNotes
                        </Heading>
                    </LinkOverlay>
                </Box>
            </Grid>
        </LinkBox>
}
