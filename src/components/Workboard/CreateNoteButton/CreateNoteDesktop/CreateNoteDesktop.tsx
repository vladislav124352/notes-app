import { AddIcon } from "@chakra-ui/icons";
import { Button, GridItem, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { EditableNoteValues } from "../../../../store/reducers/workboardReducer/models/INote";
import { EditorNoteModal } from "../../EditorNoteModal/EditorNoteModal";

interface Props {
    onClick: (values: EditableNoteValues) => void;
}

export const CreateNoteDesktop: FC<Props> = ({ onClick }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const maxWidth = useBreakpointValue({ base: '100%', md: '280px' });

    const onSubmit = (values: EditableNoteValues) => {
        onClick(values);
        onClose()
    }

    return (
        <GridItem
            width='100%'
            height='280px'
            borderRadius='md'
            maxWidth={maxWidth}
            bgColor='rgb(237, 242, 247)'>
            <Button
                width='100%'
                height='100%'
                onClick={onOpen}
                aria-label='Go to create note'>
                <AddIcon />
            </Button>
            <EditorNoteModal
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={onSubmit} />
        </GridItem>
    )
}   