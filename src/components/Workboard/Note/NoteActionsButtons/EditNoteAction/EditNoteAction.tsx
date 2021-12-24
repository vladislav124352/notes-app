import { EditIcon } from '@chakra-ui/icons'
import { IconButton, useDisclosure, useToast } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useAppDispatch } from '../../../../../hooks/redux/redux'
import { editeNote } from '../../../../../store/reducers/notesReducer/ActionCreators'
import { INote } from '../../../../../store/reducers/notesReducer/models/INote'
import { EditorNoteModal } from '../../../EditorNoteModal/EditorNoteModal'
import { IEditorNoteValues } from '../../../EditorNoteModal/models'

interface Props {
    note: INote;
}

export const EditNoteAction: FC<Props> = ({ note }) => {
    const dispatch = useAppDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    const onSubmit = (values: IEditorNoteValues) => {
        dispatch(editeNote({
            ...values,
            id: note.id,
            createdDate: note.createdDate,
        }));
        onClose();
        toast({
            title: 'Note changed',
            status: 'info',
            duration: 3000,
            isClosable: true,
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
            onClose={onSubmit}
            onCancel={onClose}
            initialValues={{
                title: note.title,
                content: note.content
            }} />
    </>
}
