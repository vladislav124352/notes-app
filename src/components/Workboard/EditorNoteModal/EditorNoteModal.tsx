import { useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';
import { defaultNoteValues } from '../../../constants';
import { IEditorNoteModal } from './models';
import { NoteDrawer } from './NoteDrawer/NoteDrawer';
import { NoteModal } from './NoteModal/NoteModal';

export const EditorNoteModal: FC<IEditorNoteModal> = ({
    isOpen,
    onSubmit,
    onClose,
    initialValues = defaultNoteValues
}) => {
    const isChangeModalToDrawer = useBreakpointValue({ base: false, md: true });

    return isChangeModalToDrawer
        ? <NoteModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            initialValues={initialValues} />
        : <NoteDrawer
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
            initialValues={initialValues} />
}
