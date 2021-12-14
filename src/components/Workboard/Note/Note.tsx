import { Box, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

type Props = {
    title: string;
    content: string;
}

export const Note: FC<Props> = ({ title, content }) => {
    return (
        <Box
            py='10px'
            px='15px'
            width='100%'
            height='280px'
            boxShadow='base'
            borderRadius='5px'>
            <Text fontSize='20px'>{title}</Text>
            <Text>{content}</Text>
        </Box>
    )
}
