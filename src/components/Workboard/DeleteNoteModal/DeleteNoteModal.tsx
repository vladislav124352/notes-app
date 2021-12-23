import { Button, ButtonGroup, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
    isOpen: boolean;
    onDelete: (...args: any[]) => void;
    onCancel: () => void;
}

export const DeleteNoteModal: FC<Props> = ({ isOpen, onDelete, onCancel }) => {
    return (
        <Modal isOpen={isOpen} onClose={onCancel}>
            <ModalOverlay />
            <ModalContent
                margin='auto 20px'
                heigth='400px'>
                <ModalBody marginTop='20px'>
                    <Text>Are you sure delete this note?</Text>
                </ModalBody>
                <ModalFooter>
                    <ButtonGroup>
                        <Button
                            onClick={onDelete}
                            colorScheme='red'>
                            Delete
                        </Button>
                        <Button
                            onClick={onCancel}
                            colorScheme='gray'>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
