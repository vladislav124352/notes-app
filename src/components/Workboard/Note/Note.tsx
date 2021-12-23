import { Box, ButtonGroup, GridItem, useBreakpointValue } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useFormatedDate } from '../../../hooks/components/useFormatedDate';
import { INote } from '../../../store/reducers/notesReducer/models/INote';
import { DeleteNoteAction } from './NoteActionsButtons/DeleteNoteAction/DeleteNoteAction';
import { EditNoteAction } from './NoteActionsButtons/EditNoteAction/EditNoteAction';
import { NoteContent } from './NoteContent/NoteContent';
import { NoteCreatedDate } from './NoteCreatedDate/NoteCreatedDate';
import { NoteTitle } from './NoteTitle/NoteTitle';

type Props = INote;

export const Note: FC<Props> = ({ title, content, createdDate, id }) => {
    const maxWidthBreakpoint = useBreakpointValue({ base: '100%', md: '280px' });
    const formatedDate = useFormatedDate(createdDate);
    const note = { title, content, createdDate, id };

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
                <NoteCreatedDate date={formatedDate} />
                <ButtonGroup>
                    <EditNoteAction note={note} />
                    <DeleteNoteAction noteId={id} />
                </ButtonGroup>
            </Box>
        </GridItem>
    )
}
