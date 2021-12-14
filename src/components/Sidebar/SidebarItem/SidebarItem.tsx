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
                    gutter={10}
                    label={title}
                    placement='right'>
                    <Button
                        width='100%'
                        display='flex'
                        alignItems='center'
                        justifyContent='center'>
                        <Icon />
                    </Button>
                </Tooltip>
            ) : (
                <Button
                    width='100%'
                    display='flex'
                    alignItems='center'
                    flexDirection='row'
                    justifyContent='flex-start'>
                    <Icon mr='10px' />
                    <Text>{title}</Text>
                </Button>
            )}
        </ListItem>
    )
}
