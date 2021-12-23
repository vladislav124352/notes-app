import {
    Modal, ModalOverlay,
    ModalContent, ModalBody,
    ModalFooter, Box
} from '@chakra-ui/react'
import { Formik } from 'formik';
import { SubmitButton, TextareaControl } from 'formik-chakra-ui';
import { FC } from 'react'
import { useAutoResize } from '../../../hooks/components/useAutoResize';
import { IEditorNoteModal, IEditorNoteValues } from './models';

const defaultValues: IEditorNoteValues = {
    title: '',
    content: ''
}

export const EditorNoteModal: FC<IEditorNoteModal> = ({
    isOpen,
    onCancel,
    onClose,
    initialValues = defaultValues
}) => {
    const autoResize = useAutoResize();
    const buttonText = initialValues.title ? 'Edit note' : 'Create note';

    return (
        <Modal isCentered isOpen={isOpen} onClose={onCancel}>
            <ModalOverlay />
            <ModalContent margin='20px'>
                <Formik initialValues={initialValues} onSubmit={onClose}>
                    {({ handleSubmit, values }) => (
                        <Box as='form' onSubmit={handleSubmit as any}>
                            <ModalBody marginTop='20px'>
                                <TextareaControl
                                    isRequired
                                    name='title'
                                    aria-label='Note title'
                                    textareaProps={{
                                        minHeight: '50px',
                                        resize: 'none',
                                        fontSize: '24px',
                                        overflow: 'hidden',
                                        variant: 'outlined',
                                        onInput: autoResize,
                                        placeholder: 'Title ...'
                                    }} />

                                <TextareaControl
                                    name='content'
                                    aria-label='Content title'
                                    textareaProps={{
                                        minHeight: '150px',
                                        resize: 'none',
                                        fontSize: '18px',
                                        overflow: 'hidden',
                                        variant: 'outlined',
                                        onInput: autoResize,
                                        placeholder: 'Do something ...'
                                    }} />
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
