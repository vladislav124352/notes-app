import { useEffect } from 'react'
import { Grid, Container, Box } from '@chakra-ui/layout';
import { Note } from './Note/Note';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { useBreakpointValue } from '@chakra-ui/react';
import { CreateNoteButton } from './CreateNoteButton/CreateNoteButton';
import { fetchNotes } from '../../store/reducers/workboardReducer/ActionCreators';
import { getNotesSelector } from '../../store/reducers/workboardReducer/selectors/getNotesSelector';

export const Workboard = () => {
    const dispatch = useAppDispatch();
    const notes = useAppSelector(getNotesSelector);
    const justifyItems = useBreakpointValue({ base: 'center', lg: 'flex-start' });
    const paddingBottom = useBreakpointValue({ base: '160px', md: '50px' })

    useEffect(() => {
        dispatch(fetchNotes())
    }, [dispatch])

    const notesComponentList = notes.map(({ title, content, creationDate, id }) => {
        return <Note
            id={id}
            title={title}
            content={content}
            key={`Note#_${id}`}
            creationDate={creationDate} />
    })

    return (
        <Box
            width='100%'
            overflow='auto'
            bgColor='#dde2e6'>
            <Container maxWidth='container.xl'>
                <Grid
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
            </Container>
        </Box>
    )
}