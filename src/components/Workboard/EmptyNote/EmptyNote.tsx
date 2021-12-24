import { AddIcon } from '@chakra-ui/icons';
import {
    Button,
    GridItem,
    useBreakpointValue,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/redux/redux';
import { EditorNoteModal } from '../EditorNoteModal/EditorNoteModal';
import { generateRandomId } from '../../../hooks/tools/generateRandomId';
import { createNote } from '../../../store/reducers/notesReducer/ActionCreators';

export const EmptyNote = () => {
    const dispatch = useAppDispatch()
    const maxWidthBreakpoint = useBreakpointValue({ base: '100%', md: '280px' });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    const onSubmit = (values: any) => {
        dispatch(createNote({
            id: generateRandomId(),
            createdDate: Date.now(),
            ...values
        }));
        onClose();
        toast({
            title: 'Note created',
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
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
                onClick={onOpen}
                aria-label='Go to create note'>
                <AddIcon />
            </Button>
            <EditorNoteModal
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={onSubmit} />
        </GridItem>
    )
}
