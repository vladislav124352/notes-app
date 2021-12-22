import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    Box
} from '@chakra-ui/react'
import { Formik } from 'formik';
import { SubmitButton, TextareaControl } from 'formik-chakra-ui';
import { FC } from 'react'
import { useAutoResize } from '../../../hooks/components/useAutoResize';

interface Props {
    isOpen: boolean;
    onClose: (...args: any[]) => void;
    onCancel: () => void;
}

const initialValues = {
    title: '',
    content: ''
}

export const CreateNoteModal: FC<Props> = ({ isOpen, onCancel, onClose }) => {
    const autoResize = useAutoResize();

    return (
        <Modal isOpen={isOpen} onClose={onCancel}>
            <ModalOverlay />
            <ModalContent
                margin='auto 20px'
                heigth='400px'>
                <Formik initialValues={initialValues} onSubmit={onClose}>
                    {({ handleSubmit }) => (
                        <Box as='form' onSubmit={handleSubmit as any}>
                            <ModalBody marginTop='20px'>
                                <TextareaControl
                                    name='title'
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
                                    textareaProps={{
                                        minHeight: '150px',
                                        resize: 'none',
                                        height: '100%',
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
                                    colorScheme='green'>
                                    Create note
                                </SubmitButton>
                            </ModalFooter>
                        </Box>
                    )}
                </Formik>
            </ModalContent>
        </Modal>
    )
}
