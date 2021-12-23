import { Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    title: string;
}

export const NoteTitle: FC<Props> = ({ title }) => {
    return (
        <Text
            sx={{
                '-webkit-line-clamp': '2',
                '-webkit-box-orient': 'vertical'
            }}
            fontSize='22px'
            lineHeight={1.3}
            fontWeight='600'
            overflow='hidden'
            marginBottom='10px'
            display='-webkit-box'>
            {title}
        </Text>
    )
}
