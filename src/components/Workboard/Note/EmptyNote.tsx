import { AddIcon } from '@chakra-ui/icons';
import {
    Button,
    GridItem,
    useBreakpointValue,
    useDisclosure
} from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/redux/redux';
import { createNote } from '../../../store/reducers/notesReducer/ActionCreators';
import { CreateNoteModal } from '../CreateNoteModal/CreateNoteModal';

export const EmptyNote = () => {
    const dispatch = useAppDispatch()
    const maxWidthBreakpoint = useBreakpointValue({ base: '100%', md: '280px' });
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmit = (values: any) => {
        dispatch(createNote({
            id: `Note_#${Date.now()}`,
            createdDate: Date.now(),
            ...values
        }))
        onClose()
    }

    return (
        <GridItem
            width='100%'
            height='280px'
            borderRadius='md'
            maxWidth={maxWidthBreakpoint}
            bgColor='rgb(237, 242, 247)'>
            <Button
                width='100%'
                height='100%'
                onClick={onOpen}>
                <AddIcon />
            </Button>
            <CreateNoteModal
                isOpen={isOpen}
                onClose={onSubmit}
                onCancel={onClose} />
        </GridItem>
    )
}