import React from 'react'
import { Box, Grid, Heading, Link, LinkBox, LinkOverlay } from '@chakra-ui/layout'
import NotesAppIcon from '../images/NotesApp-icon.svg';
import { Image } from '@chakra-ui/image';
import { useBreakpointValue } from '@chakra-ui/media-query';

export const GoHome = () => {
    const isCollapseBreakpoint = useBreakpointValue({ base: true, lg: false })

    return isCollapseBreakpoint ? (
        <Link href='/' aria-label='Go home' borderRadius='full'>
            <Image
                borderRadius='full'
                boxSize='40px'
                src={NotesAppIcon}
                alt='Notes app logo' />
        </Link>
    ) : (
        <LinkBox rounded='md'>
            <Grid templateColumns='40px 1fr' gap='15px'>
                <Image
                    borderRadius='full'
                    boxSize='40px'
                    src={NotesAppIcon}
                    alt='Notes app logo' />
                <Box
                    d='flex'
                    alignItems='center'
                    display='flex'>
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
