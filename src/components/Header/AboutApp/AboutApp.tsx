import {
    AtSignIcon, CheckIcon,
    ExternalLinkIcon, PhoneIcon
} from '@chakra-ui/icons'
import {
    Text, Link, Drawer,
    Heading, Container,
    DrawerBody, DrawerHeader,
    DrawerOverlay, DrawerContent,
    DrawerCloseButton, Divider,
    List, ListItem, ListIcon, useBreakpointValue,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaTelegram, FaFacebook, FaVk, } from 'react-icons/fa';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const AboutApp: FC<Props> = ({ isOpen, onClose }) => {
    const headFontSize = useBreakpointValue({ base: '18px', md: '24px' })

    const VladLink = <Link
        bgColor='cyan.50' padding='2px 5px 6px 5px'
        aria-label='Github developer account author'
        textDecoration='underline' isExternal
        color='cyan' href='https://github.com/vladislav124352'>
        Vlad <ExternalLinkIcon boxSize='16px' marginX='2px' />
    </Link>

    const projectLink = <Link
        bgColor='yellow.100' padding='2px 5px 6px 5px'
        aria-label='Link to the github repository of this app'
        textDecoration='underline' isExternal
        color='blue' href='https://github.com/vladislav124352/notes-app'>
        project <ExternalLinkIcon boxSize='16px' marginX='2px' />
    </Link>

    const technology = (nameTechnology: string, href: string) => {
        return <Link
            isExternal
            href={href}
            fontSize='14px'
            padding='5px 8px'
            bgColor='gray.100'
            borderRadius='5px'
            flexDirection='row'
            alignItems='center'
            display='inline-flex'
            aria-label={`Go to the ${nameTechnology} page`}>
            {nameTechnology}
            <ExternalLinkIcon
                color='gray.700'
                boxSize='12px'
                marginLeft='5px' />
        </Link>
    }

    const contact = (nameContact: string, href: string) => {
        return <Link
            isExternal
            href={href}
            color='blue'
            aria-label={`Go to ${nameContact.toLocaleLowerCase()}`}>
            {nameContact}
        </Link>
    }

    const react = technology('React', 'https://reactjs.org/');
    const reduxToolkit = technology('Redux-Toolkit', 'https://redux-toolkit.js.org/');
    const typescript = technology('TypeScript', 'https://www.typescriptlang.org/');
    const chakraUI = technology('Chakra UI', 'https://chakra-ui.com/');
    const formik = technology('Formik', 'https://formik.org/');
    const vercel = technology('Vercel', 'https://vercel.com/');

    const gmail = contact('vladpolisuk159@gmail.com', 'mailto:vladpolisuk159@gmail.com');
    const telNumber = contact('+7 958 680-39-72', 'tel:+79586803972');
    const telegram = contact('My Telegram', 'https://t.me/vladislav124352');
    const facebook = contact('My Facebook', 'https://www.facebook.com/vladislav124352/',);
    const vk = contact('My VK', 'https://vk.com/vladislav124352/');

    return (
        <Drawer
            size='full'
            isOpen={isOpen}
            onClose={onClose}
            placement='bottom'>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <Heading fontSize={headFontSize}>
                        What's this app?
                    </Heading>
                </DrawerHeader>
                <DrawerBody overflow='hidden'>
                    <Container paddingBottom='20px' overflow='auto' height='100%' maxWidth='container.md'>
                        <Text marginBottom='10px' fontSize='20px'>
                            Hello everyone, my name is {VladLink} and  I made this app. This is a simple
                            Notes application using popular technologies.
                            The app will be constantly developing and at the moment
                            it can serve as an example of my personal {projectLink}.
                        </Text>
                        <Divider marginBottom='10px' />
                        <Text marginBottom='10px' fontSize='20px'>
                            Technologies used:
                        </Text>
                        <List
                            spacing={3}
                            marginLeft='20px'
                            marginBottom='20px'>
                            <ListItem>
                                <ListIcon as={CheckIcon} color='green.500' />
                                {react}, {reduxToolkit}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color='green.500' />
                                {typescript}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color='green.500' />
                                {chakraUI}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color='green.500' />
                                {formik}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={CheckIcon} color='green.500' />
                                {vercel}
                            </ListItem>
                        </List>
                        <Text as='i' fontSize='20px'>
                            And my contacts (if you want to contact me):
                        </Text>
                        <List
                            spacing={3}
                            marginTop='10px'
                            marginLeft='20px'
                            marginBottom='20px'>
                            <ListItem display='flex' alignItems='center'>
                                <ListIcon marginRight='10px' boxSize='18px' as={AtSignIcon} />
                                {gmail}
                            </ListItem>
                            <ListItem display='flex' alignItems='center'>
                                <ListIcon marginRight='10px' boxSize='18px' as={PhoneIcon} />
                                {telNumber}
                            </ListItem>
                            <ListItem display='flex' alignItems='center'>
                                <ListIcon marginRight='10px' boxSize='18px' as={FaTelegram} />
                                {telegram}
                            </ListItem>
                            <ListItem display='flex' alignItems='center'>
                                <ListIcon marginRight='10px' boxSize='18px' as={FaFacebook} />
                                {facebook}
                            </ListItem>
                            <ListItem display='flex' alignItems='center'>
                                <ListIcon marginRight='10px' boxSize='18px' as={FaVk} />
                                {vk}
                            </ListItem>
                        </List>
                    </Container>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
