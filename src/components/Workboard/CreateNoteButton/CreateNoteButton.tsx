import { useBreakpointValue } from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/redux/redux';
import { generateRandomId } from '../../../tools/generateRandomId';
import { createNote } from '../../../store/reducers/workboardReducer/ActionCreators';
import { CreateNoteMobile } from './CreateNoteMobile/CreateNoteMobile';
import { CreateNoteDesktop } from './CreateNoteDesktop/CreateNoteDesktop';
import { EditableNoteValues } from '../../../store/reducers/workboardReducer/models/INote';
import { useNotify } from '../../../hooks/components/useNotify';

export const CreateNoteButton = () => {
    const dispatch = useAppDispatch()
    const isShowMobileVersion = useBreakpointValue({ base: true, md: false });
    const notify = useNotify('create');

    const onSubmit = (values: EditableNoteValues) => {
        dispatch(createNote({
            id: generateRandomId(),
            creationDate: Date.now(),
            ...values
        }));
        notify()
    }

    return isShowMobileVersion
        ? <CreateNoteMobile onClick={onSubmit} />
        : <CreateNoteDesktop onClick={onSubmit} />
}
