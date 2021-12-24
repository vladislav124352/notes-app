import { Box, ButtonGroup, GridItem, useBreakpointValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { INote } from '../../../store/reducers/workboardReducer/models/INote';
import { DeleteNoteAction } from './NoteActionsButtons/DeleteNoteAction/DeleteNoteAction';
import { EditNoteAction } from './NoteActionsButtons/EditNoteAction/EditNoteAction';
import { NoteContent } from './NoteContent/NoteContent';
import { NoteCreationDate } from './NoteCreationDate/NoteCreationDate';
import { NoteTitle } from './NoteTitle/NoteTitle';

export const Note: FC<INote> = ({ title, content, creationDate, id }) => {
    const maxWidthBreakpoint = useBreakpointValue({ base: '100%', md: '280px' });

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
                <NoteTitle title={title} />
                <NoteContent content={content} />
            </Box>
            <Box
                width='100%'
                display='flex'
                alignItems='center'
                justifyContent='space-between'>
                <NoteCreationDate date={creationDate} />
                <ButtonGroup>
                    <EditNoteAction noteId={id} />
                    <DeleteNoteAction noteId={id} />
                </ButtonGroup>
            </Box>
        </GridItem>
    )
}
