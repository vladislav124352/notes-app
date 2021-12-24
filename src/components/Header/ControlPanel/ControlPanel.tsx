import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { SettingsIcon } from '@chakra-ui/icons'
import { GridItem } from '@chakra-ui/layout'
import { ButtonGroup } from '@chakra-ui/react'
import React from 'react'

export const ControlPanel = () => {
    return (
        <GridItem>
            <ButtonGroup>
                <IconButton
                    aria-label='Open settings'
                    icon={<SettingsIcon />} />
                <IconButton
                    aria-label='Open fallback'
                    icon={<Icon />} />
            </ButtonGroup>
        </GridItem>
    )
}
