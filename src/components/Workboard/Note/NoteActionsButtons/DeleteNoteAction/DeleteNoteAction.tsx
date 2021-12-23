import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import React, { FC } from 'react'
import { useAppDispatch } from '../../../../../hooks/redux/redux'
import { deleteNote } from '../../../../../store/reducers/notesReducer/ActionCreators'
import { DeleteNoteModal } from '../../../DeleteNoteModal/DeleteNoteModal'

interface Props {
    noteId: number;
}

export const DeleteNoteAction: FC<Props> = ({ noteId }) => {
    const dispatch = useAppDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmit = () => {
        onClose()
        dispatch(deleteNote(noteId))
    }

    return <>
        <IconButton
            size='sm'
            onClick={onOpen}
            aria-label='Delete note'>
            <DeleteIcon />
        </IconButton>
        <DeleteNoteModal
            isOpen={isOpen}
            onDelete={onSubmit}
            onCancel={onClose}
        />
    </>
}
