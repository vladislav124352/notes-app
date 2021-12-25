import { useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';
import { defaultNoteValues } from '../../../constants';
import { IEditorNoteModal } from './models';
import { NoteDrawer } from './NoteDrawer/NoteDrawer';
import { NoteModal } from './NoteModal/NoteModal';

export const EditorNoteModal: FC<IEditorNoteModal> = ({
    isOpen,
    onClose,
    onSubmit,
    initialValues = defaultNoteValues
}) => {
    const isChangeModalToDrawer = useBreakpointValue({ base: false, md: true });

    return isChangeModalToDrawer
        ? <NoteModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            initialValues={initialValues}
            isEditNote={!!initialValues.title} />
        : <NoteDrawer
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            initialValues={initialValues}
            isEditNote={!!initialValues.title} />
}
