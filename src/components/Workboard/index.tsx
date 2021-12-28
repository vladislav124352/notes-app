import { Box, Container, Grid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/react';
import { DragEvent, useEffect, useState } from 'react';
import { defaultNoteObject } from '../../constants';
import { getNoteById } from '../../hooks/api/localStorage/getNoteById';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { dragNote, fetchNotes } from '../../store/reducers/workboardReducer/ActionCreators';
import { INote } from '../../store/reducers/workboardReducer/models/INote';
import { getIsNotesFoundSelector, getNotesSelector } from '../../store/reducers/workboardReducer/selectors';
import { CreateNoteButton } from './CreateNoteButton/CreateNoteButton';
import { Note } from './Note/Note';
import { NothingFound } from './NothingFound/NothingFound';

export const Workboard = () => {
    const dispatch = useAppDispatch();
    const notes = useAppSelector(getNotesSelector);
    const isNotesFound = useAppSelector(getIsNotesFoundSelector)
    const [selectedDraggableNote, setSelectedDraggableNote] = useState<INote>(defaultNoteObject);
    const paddingBottom = useBreakpointValue({ base: '160px', md: '50px' })
    const justifyItems = useBreakpointValue({ base: 'center', lg: 'flex-start' });

    useEffect(() => {
        dispatch(fetchNotes())
    }, [dispatch])

    const dropHandler = (event: DragEvent<HTMLDivElement>, id: number) => {
        event.preventDefault()
        const target = event.target as HTMLDivElement;
        target.style.border = 'none'
        const note = getNoteById(id);
        dispatch(dragNote(selectedDraggableNote, note))
    }

    const gragStartHandler = (event: DragEvent<HTMLDivElement>, id: number) => {
        const note = getNoteById(id);
        setSelectedDraggableNote(note)
    }

    const dragEndHandler = (event: DragEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        target.style.border = 'none'
    }

    const dragOverHandler = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const target = event.target as HTMLDivElement;
        target.style.border = '2px solid #b7bbd8'
    }

    const notesComponentList = notes.map(({ title, content, creationDate, id }) => {
        return <Note
            id={id}
            title={title}
            content={content}
            drop={dropHandler}
            key={`Note#_${id}`}
            dragEnd={dragEndHandler}
            dragOver={dragOverHandler}
            creationDate={creationDate}
            dragStart={gragStartHandler} />
    })

    return (
        <Box
            width='100%'
            overflow='auto'
            bgColor='#dde2e6'>
            <Container maxWidth='container.xl'>
                {isNotesFound
                    ? <Grid
                        as='ul'
                        gap='15px'
                        width='100%'
                        padding='15px'
                        overflow='auto'
                        paddingBottom={paddingBottom}
                        justifyItems={justifyItems}
                        gridTemplateColumns='repeat(auto-fill, minmax(280px, 1fr))'>
                        {notesComponentList}
                        <CreateNoteButton />
                    </Grid>
                    : <NothingFound />
                }
            </Container>
        </Box>
    )
}