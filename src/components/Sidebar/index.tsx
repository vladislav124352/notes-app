import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { List } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import React from 'react'
import { SidebarItem } from './SidebarItem/SidebarItem'

const Sidebar = () => {
    const isCollapseBreakpoint = useBreakpointValue({ base: true, lg: false })

    return (
        <List p='15px'>
            <SidebarItem
                aria-label='Add note'
                Icon={AddIcon}
                title='Add note'
                isCollapse={isCollapseBreakpoint || false} />
            <SidebarItem
                aria-label='Edit note'
                Icon={EditIcon}
                title='Edit note'
                isCollapse={isCollapseBreakpoint || false} />
            <SidebarItem
                aria-label='Delete note'
                Icon={DeleteIcon}
                title='Delete note'
                isCollapse={isCollapseBreakpoint || false} />
        </List>
    )
}

export default Sidebar
