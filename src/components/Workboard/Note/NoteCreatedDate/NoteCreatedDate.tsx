import { Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useFormatedDate } from '../../../../hooks/components/useFormatedDate';

interface Props {
    date: number;
}

export const NoteCreatedDate: FC<Props> = ({ date }) => {
    const formatedDate = useFormatedDate(date);

    return (
        <Text
            userSelect='none'
            fontSize='14px'
            color='#818c8f'>
            {formatedDate}
        </Text>
    )
}
