import { Box, ComponentWithAs, IconProps, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { FC } from 'react';

interface Props {
    Icon: ComponentWithAs<"svg", IconProps>;
    title: string;
    color: string;
}

export const Notify: FC<Props> = ({ Icon, title, color }) => {
    const width = useBreakpointValue({ base: '200px', md: 'auto' })
    return (
        <Box
            width={width}
            display='flex'
            borderRadius='md'
            alignItems='center'
            padding='10px 15px'
            bgColor={color}>
            <Icon color='white' marginRight='10px' />
            <Text fontWeight='bold' color='white'>
                {title}
            </Text>
        </Box>
    )
}
