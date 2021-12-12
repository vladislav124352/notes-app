import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { SettingsIcon } from '@chakra-ui/icons'
import { Grid } from '@chakra-ui/layout'
import React from 'react'

export const ControlPanel = () => {
    return (
        <Grid templateColumns='40px 40px' gap='10px'>
            <IconButton
                aria-label='Open settings'
                icon={<SettingsIcon />} />
            <IconButton
                aria-label='Open fallback'
                icon={<Icon />} />
        </Grid>
    )
}
