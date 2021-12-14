import { AddIcon } from '@chakra-ui/icons'
import { Box, Button, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
    title?: string;
    content?: string;
    isEmpty?: boolean;
}

export const Note: FC<Props> = ({ title = 'Untitled', content = '', isEmpty }) => {
    return isEmpty ? (
        <Button
            py='10px'
            px='15px'
            width='300px'
            height='300px'
            borderRadius='md'
            bgColor='rgb(237, 242, 247)'>
            <AddIcon />
        </Button>
    ) : (
        <Box
            py='10px'
            px='15px'
            width='100%'
            height='280px'
            boxShadow='base'
            bgColor='#ffffff'
            borderRadius='md'>
            <Text fontSize='20px'>{title}</Text>
            <Text>{content}</Text>
        </Box>
    )
}
