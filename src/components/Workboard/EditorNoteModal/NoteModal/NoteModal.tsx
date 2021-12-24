import { Box, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react'
import { Formik } from 'formik'
import { SubmitButton } from 'formik-chakra-ui'
import React, { FC } from 'react'
import { ContentTextarea } from '../ContentTextarea/ContentTextarea'
import { INoteEditor } from '../models'
import { TitleTextarea } from '../TitleTextarea/TitleTextarea'

export const NoteModal: FC<INoteEditor> = ({ isOpen, onSubmit, onClose, initialValues, isEditNote }) => {
    const buttonText = isEditNote ? 'Edit note' : 'Create note';

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent margin='20px'>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({ handleSubmit, values }) => (
                        <Box as='form' onSubmit={handleSubmit as any}>
                            <ModalBody marginTop='20px'>
                                <TitleTextarea />
                                <ContentTextarea />
                            </ModalBody>
                            <ModalFooter>
                                <SubmitButton
                                    width='100%'
                                    colorScheme='green'
                                    aria-label={buttonText}
                                    disabled={!values.title}>
                                    {buttonText}
                                </SubmitButton>
                            </ModalFooter>
                        </Box>
                    )}
                </Formik>
            </ModalContent>
        </Modal>
    )
}
