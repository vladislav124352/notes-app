import { useBreakpointValue, useToast } from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/redux/redux';
import { generateRandomId } from '../../../hooks/tools/generateRandomId';
import { createNote } from '../../../store/reducers/workboardReducer/ActionCreators';
import { CreateNoteMobile } from './CreateNoteMobile/CreateNoteMobile';
import { CreateNoteDesktop } from './CreateNoteDesktop/CreateNoteDesktop';
import { EditableNoteValues } from '../../../store/reducers/workboardReducer/models/INote';

export const CreateNoteButton = () => {
    const toast = useToast();
    const dispatch = useAppDispatch()
    const isShowMobileVersionBreakpount = useBreakpointValue({ base: true, md: false });

    const onSubmit = (values: EditableNoteValues) => {
        dispatch(createNote({
            id: generateRandomId(),
            creationDate: Date.now(),
            ...values
        }));
        toast({
            duration: 2000,
            isClosable: true,
            status: 'success',
            title: 'Note created',
            position: isShowMobileVersionBreakpount
                ? 'bottom-left' : 'bottom-right'
        })
    }

    return isShowMobileVersionBreakpount
        ? <CreateNoteMobile onClick={onSubmit} />
        : <CreateNoteDesktop onClick={onSubmit} />
}
