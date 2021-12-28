import { Box, Button, Center, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRight, FaCommentSlash, FaRegSadCry, FaSearch } from 'react-icons/fa'

export const NothingFound = () => {
    return (
        <Center
            display='flex'
            padding='10px'
            maxWidth='300px'
            borderRadius='md'
            margin='30px auto'
            flexDirection='column' >
            <Box
                width='100%'
                display='flex'
                maxWidth='160px'
                marginBottom='4px'
                alignItems='center'
                justifyContent='space-between'>
                <FaSearch color='#004eff69' size='32px' />
                <FaArrowRight color='#0000007a' size='12px' />
                <FaCommentSlash color='#ff000061' size='32px' />
                <FaArrowRight color='#0000007a' size='12px' />
                <FaRegSadCry color='#ff8d006b' size='32px' />
            </Box>
            <Heading
                color='#646464'
                fontSize='20px'
                margin='5px 0 10px 0'>
                Note not found!
            </Heading>
        </Center>
    )
}
