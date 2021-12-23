import { EditIcon } from '@chakra-ui/icons'
import { IconButton, useDisclosure } from '@chakra-ui/react'
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

    const onSubmit = (values: IEditorNoteValues) => {
        dispatch(editeNote({
            ...values,
            id: note.id,
            createdDate: note.createdDate,
        }));
        onClose();
    }

    return <>
        <IconButton
            size='sm'
            onClick={onOpen}
            aria-label='Edit note'>
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
