import {
    Modal,
    Button,
    ModalBody,
    ModalFooter,
    ButtonGroup,
    ModalHeader,
    ModalContent,
    ModalOverlay
} from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    isOpen: boolean;
    onDelete: (...args: any[]) => void;
    onCancel: () => void;
}

export const DeleteNoteModal: FC<Props> = ({ isOpen, onDelete, onCancel }) => {
    return (
        <Modal isCentered isOpen={isOpen} onClose={onCancel}>
            <ModalOverlay />
            <ModalContent margin='20px'>
                <ModalBody>
                    <ModalHeader>
                        Are you sure you want to delete this note?
                    </ModalHeader>
                </ModalBody>
                <ModalFooter>
                    <ButtonGroup>
                        <Button
                            colorScheme='red'
                            onClick={onDelete}
                            aria-label='Delete'>
                            Delete
                        </Button>
                        <Button
                            colorScheme='gray'
                            onClick={onCancel}
                            aria-label='Cancel'>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
