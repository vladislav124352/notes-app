import { GridItem, IconButton, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { EditorNoteModal } from '../../EditorNoteModal/EditorNoteModal';
import { EditableNoteValues } from '../../../../store/reducers/workboardReducer/models/INote';

interface Props {
    onClick: (values: EditableNoteValues) => void;
}

export const CreateNoteMobile: FC<Props> = ({ onClick }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const onSubmit = (values: EditableNoteValues) => {
        onClick(values);
        onClose()
    }

    return (
        <GridItem>
            <IconButton
                isRound
                width='80px'
                right='50px'
                bottom='40px'
                height='80px'
                boxShadow='lg'
                variant='solid'
                onClick={onOpen}
                colorScheme='teal'
                position='absolute'
                aria-label='Go to create note'
                children={<AddIcon boxSize='25px' />} />
            <EditorNoteModal
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={onSubmit} />
        </GridItem>
    )
}