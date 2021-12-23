import { Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    date: string;
}

export const NoteCreatedDate: FC<Props> = ({ date }) => {
    return (
        <Text
            userSelect='none'
            fontSize='14px'
            color='#818c8f'>
            {date}
        </Text>
    )
}
