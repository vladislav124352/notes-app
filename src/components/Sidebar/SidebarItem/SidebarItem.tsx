import { Button } from '@chakra-ui/button'
import { IconProps } from '@chakra-ui/icon'
import { ListItem, Text } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/react'
import { ComponentWithAs } from '@chakra-ui/system'
import React, { FC } from 'react'

type Props = {
    title: string;
    Icon: ComponentWithAs<"svg", IconProps>;
    isCollapse: boolean;
}

export const SidebarItem: FC<Props> = ({ Icon, title, isCollapse }) => {
    return (
        <ListItem mb='10px'>
            {isCollapse ? (
                <Tooltip
                    hasArrow
                    placement='right'
                    gutter={10}
                    label={title}>
                    <Button
                        w='100%'
                        d='flex'
                        justifyContent='center'
                        alignItems='center'>
                        <Icon />
                    </Button>
                </Tooltip>
            ) : (
                <Button
                    w='100%'
                    d='flex'
                    justifyContent='flex-start'
                    alignItems='center'
                    flexDirection='row'>
                    <Icon mr='10px' />
                    <Text>{title}</Text>
                </Button>
            )}
        </ListItem>
    )
}
