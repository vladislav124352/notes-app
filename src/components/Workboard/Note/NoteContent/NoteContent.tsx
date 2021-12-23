import { Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    content: string;
}

export const NoteContent: FC<Props> = ({ content }) => {
    return (
        <Text
            sx={{
                '-webkit-line-clamp': '5',
                '-webkit-box-orient': 'vertical'
            }}
            wordBreak='break-word'
            display='-webkit-box'
            overflow='hidden'
            whiteSpace='break-spaces'>
            {content}
        </Text>
    )
}
