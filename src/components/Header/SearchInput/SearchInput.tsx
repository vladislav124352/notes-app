import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import React from 'react'

export const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.400' />} />
            <Input
                aria-label='Search for notes'
                variant='filled'
                placeholder='Search for notes ...' />
        </InputGroup>
    )
}
