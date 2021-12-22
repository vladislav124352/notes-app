import { useEffect } from 'react'
import { Grid, Container, Box } from '@chakra-ui/layout';
import { Note } from './Note/Note';
import { useAppDispatch, useAppSelector } from '../../hooks/redux/redux';
import { getNotesSelector } from '../../store/reducers/notesReducer/selectors/getNotesSelector';
import { fetchNotes } from '../../store/reducers/notesReducer/ActionCreators';
import { useBreakpointValue } from '@chakra-ui/react';
import { EmptyNote } from './EmptyNote/EmptyNote';

const Workboard = () => {
    const dispatch = useAppDispatch();
    const notes = useAppSelector(getNotesSelector);
    const isCenterBreakpoint = useBreakpointValue({ base: 'center', lg: 'flex-start' });

    useEffect(() => {
        dispatch(fetchNotes())
    }, [dispatch])

    const notesComponentList = notes.map(({ title, content, createdDate, id }) => {
        return <Note
            key={id}
            title={title}
            content={content}
            createdDate={createdDate} />
    })

    return (
        <Box overflow='auto' width='100%' bgColor='#dde2e6'>
            <Container maxW='container.xl'>
                <Grid
                    as='ul'
                    gap='15px'
                    width='100%'
                    padding='15px'
                    overflow='auto'
                    paddingBottom='50px'
                    justifyItems={isCenterBreakpoint}
                    gridTemplateColumns='repeat(auto-fill, minmax(280px, 1fr))'>
                    {notesComponentList}
                    <EmptyNote />
                </Grid>
            </Container>
        </Box>
    )
}

export default Workboard;