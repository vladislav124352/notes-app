import { Box, GridItem, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useFormatedDate } from '../../../hooks/components/useFormatedDate';

type Props = {
    title?: string;
    content?: string;
    createdDate?: string;
}

export const Note: FC<Props> = ({ title, content, createdDate = '' }) => {
    const maxWidthBreakpoint = useBreakpointValue({ base: '100%', md: '280px' });
    const formatedDate = useFormatedDate(createdDate);

    return (
        <GridItem
            width='100%'
            display='flex'
            height='280px'
            paddingY='15px'
            paddingX='20px'
            boxShadow='base'
            bgColor='#ffffff'
            borderRadius='md'
            flexDirection='column'
            alignItems='flex-start'
            justifyContent='space-between'
            maxWidth={maxWidthBreakpoint}>
            <Box maxWidth='100%'>
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
                    {title || 'Untitled'}
                </Text>
                <Text
                    sx={{
                        '-webkit-line-clamp': '5',
                        '-webkit-box-orient': 'vertical'
                    }}
                    wordBreak='break-word'
                    display='-webkit-box'
                    overflow='hidden'
                    whiteSpace='break-spaces'>
                    {content || '***'}
                </Text>
            </Box>
            <Text
                fontSize='14px'
                color='#818c8f'>
                {formatedDate}
            </Text>
        </GridItem>
    )
}
