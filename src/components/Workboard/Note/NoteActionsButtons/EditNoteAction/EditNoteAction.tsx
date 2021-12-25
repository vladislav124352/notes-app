import { EditIcon } from '@chakra-ui/icons'
import { IconButton, useBreakpointValue, useDisclosure, useToast } from '@chakra-ui/react'
import React, { FC } from 'react'
import { getNoteById } from '../../../../../hooks/api/localStorage/getNoteById'
import { useAppDispatch } from '../../../../../hooks/redux/redux'
import { editeNote } from '../../../../../store/reducers/workboardReducer/ActionCreators'
import { EditableNoteValues } from '../../../../../store/reducers/workboardReducer/models/INote'
import { EditorNoteModal } from '../../../EditorNoteModal/EditorNoteModal'

interface Props {
    noteId: number;
}

export const EditNoteAction: FC<Props> = ({ noteId }) => {
    const dispatch = useAppDispatch()
    const { title, content } = getNoteById(noteId);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isShowMobileVersionBreakpount = useBreakpointValue({ base: true, md: false });
    const toast = useToast();

    const onSubmit = (values: EditableNoteValues) => {
        dispatch(editeNote(noteId, values));
        onClose();
        toast({
            status: 'info',
            duration: 2000,
            isClosable: true,
            title: 'Note changed',
            position: isShowMobileVersionBreakpount
                ? 'bottom-left' : 'bottom-right'
        })
    }

    return <>
        <IconButton
            size='sm'
            onClick={onOpen}
            aria-label='Go to edit note'>
            <EditIcon />
        </IconButton>
        <EditorNoteModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            initialValues={{ title, content }} />
    </>
}
