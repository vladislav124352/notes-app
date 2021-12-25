import { TimeIcon } from '@chakra-ui/icons';
import { Text, Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useFormatedDate } from '../../../../hooks/components/useFormatedDate';

interface Props {
    date: number;
}

export const NoteCreationDate: FC<Props> = ({ date }) => {
    const formatedDate = useFormatedDate(date);

    return (
        <Box display='flex' alignItems='center'>
            <TimeIcon
                color='blue.600'
                marginRight='5px' />
            <Text
                userSelect='none'
                fontSize='14px'
                color='gray.500'>
                {formatedDate}
            </Text>
        </Box>
    )
}
