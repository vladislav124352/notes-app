import { Box, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay } from '@chakra-ui/react'
import { Formik } from 'formik'
import { SubmitButton } from 'formik-chakra-ui'
import React, { FC } from 'react'
import { ContentTextarea } from '../ContentTextarea/ContentTextarea'
import { IEditorNoteOption } from '../models'
import { TitleTextarea } from '../TitleTextarea/TitleTextarea'

export const NoteDrawer: FC<IEditorNoteOption> = ({ isOpen, onClose, onSubmit, initialValues, isEditNote }) => {
    const buttonText = isEditNote ? 'Edit note' : 'Create note';

    return (
        <Drawer isOpen={isOpen} placement='bottom' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent >
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({ handleSubmit, values }) => (
                        <Box as='form' onSubmit={handleSubmit as any}>
                            <DrawerBody>
                                <TitleTextarea />
                                <ContentTextarea />
                            </DrawerBody>
                            <DrawerFooter>
                                <SubmitButton
                                    width='100%'
                                    colorScheme='green'
                                    aria-label={buttonText}
                                    disabled={!values.title}>
                                    {buttonText}
                                </SubmitButton>
                            </DrawerFooter>
                        </Box>
                    )}
                </Formik>
            </DrawerContent>
        </Drawer>
    )
}
