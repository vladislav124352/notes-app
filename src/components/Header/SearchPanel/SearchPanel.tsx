import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { GridItem } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux/redux';
import { fetchNotesByName } from '../../../store/reducers/workboardReducer/ActionCreators';

export const SearchPanel = () => {
    const [value, setValue] = useState<string>('');
    const dispatch = useAppDispatch();

    const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        dispatch(fetchNotesByName(event.target.value));
    }

    return (
        <GridItem
            display='grid'
            gridAutoFlow='column'
            gridTemplateColumns='1fr auto'>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.400' />} />
                <Input
                    value={value}
                    boxShadow='base'
                    variant='filled'
                    aria-label='Search for notes'
                    onChange={onChangeSearchInput}
                    placeholder='Search for notes ...' />
            </InputGroup>
        </GridItem>
    )
}
