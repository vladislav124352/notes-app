import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import React, { FC, MouseEvent } from 'react'
import { useNotify } from '../../../../../hooks/components/useNotify'
import { useAppDispatch } from '../../../../../hooks/redux/redux'
import { deleteNote } from '../../../../../store/reducers/workboardReducer/ActionCreators'
import { DeleteNoteModal } from '../../../DeleteNoteModal/DeleteNoteModal'

interface Props {
    noteId: number;
}

export const DeleteNoteAction: FC<Props> = ({ noteId }) => {
    const dispatch = useAppDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const notify = useNotify('delete')

    const onSubmit = (event: MouseEvent) => {
        dispatch(deleteNote(noteId))
        onClose()
        notify();
    }

    return <>
        <IconButton
            size='sm'
            onClick={onOpen}
            aria-label='Go to delete note'>
            <DeleteIcon />
        </IconButton>
        <DeleteNoteModal
            isOpen={isOpen}
            onDelete={onSubmit}
            onCancel={onClose}
        />
    </>
}
