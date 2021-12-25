import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton, useBreakpointValue, useDisclosure, useToast } from '@chakra-ui/react'
import React, { FC, MouseEvent } from 'react'
import { useAppDispatch } from '../../../../../hooks/redux/redux'
import { deleteNote } from '../../../../../store/reducers/workboardReducer/ActionCreators'
import { DeleteNoteModal } from '../../../DeleteNoteModal/DeleteNoteModal'

interface Props {
    noteId: number;
}

export const DeleteNoteAction: FC<Props> = ({ noteId }) => {
    const dispatch = useAppDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isShowMobileVersionBreakpount = useBreakpointValue({ base: true, md: false });
    const toast = useToast()

    const onSubmit = (event: MouseEvent) => {
        dispatch(deleteNote(noteId))
        onClose()
        toast({
            status: 'info',
            duration: 2000,
            isClosable: true,
            title: 'Note deleted',
            position: isShowMobileVersionBreakpount ? 'bottom-left' : 'bottom-right'
        })
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
