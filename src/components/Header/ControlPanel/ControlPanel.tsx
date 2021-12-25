import { IconButton } from '@chakra-ui/button'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { GridItem } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AboutApp } from '../AboutApp/AboutApp'

export const ControlPanel = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <GridItem>
            <IconButton
                onClick={onOpen}
                icon={<InfoOutlineIcon />}
                aria-label='Open about this app' />
            <AboutApp isOpen={isOpen} onClose={onClose} />
        </GridItem>
    )
}
