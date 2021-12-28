import { Box, ButtonGroup, GridItem, useBreakpointValue } from '@chakra-ui/react';
import React, { DragEvent, FC } from 'react';
import { INote } from '../../../store/reducers/workboardReducer/models/INote';
import { DeleteNoteAction } from './NoteActionsButtons/DeleteNoteAction/DeleteNoteAction';
import { EditNoteAction } from './NoteActionsButtons/EditNoteAction/EditNoteAction';
import { NoteContent } from './NoteContent/NoteContent';
import { NoteCreationDate } from './NoteCreationDate/NoteCreationDate';
import { NoteTitle } from './NoteTitle/NoteTitle';

type Props = Omit<INote, 'order'> & {
    dragEnd: (event: DragEvent<HTMLDivElement>) => void;
    dragOver: (event: DragEvent<HTMLDivElement>) => void;
    drop: (event: DragEvent<HTMLDivElement>, id: number) => void;
    dragStart: (event: DragEvent<HTMLDivElement>, id: number) => void;
};

export const Note: FC<Props> = ({
    id,
    drop,
    title,
    content,
    dragEnd,
    dragOver,
    dragStart,
    creationDate,
}) => {
    const maxWidth = useBreakpointValue({ base: '100%', md: '280px' });

    const dropHandler = (event: DragEvent<HTMLDivElement>) => {
        drop(event, id)
    }

    const dragStartHandler = (event: DragEvent<HTMLDivElement>) => {
        dragStart(event, id)
    }

    return (
        <GridItem
            draggable
            width='100%'
            cursor='grab'
            display='flex'
            height='280px'
            paddingY='15px'
            paddingX='20px'
            boxShadow='base'
            bgColor='#ffffff'
            borderRadius='md'
            maxWidth={maxWidth}
            onDragEnd={dragEnd}
            onDrop={dropHandler}
            onDragOver={dragOver}
            onDragLeave={dragEnd}
            flexDirection='column'
            alignItems='flex-start'
            justifyContent='space-between'
            onDragStart={dragStartHandler}>
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

