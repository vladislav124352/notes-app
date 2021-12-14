import React from 'react'
import { SimpleGrid } from '@chakra-ui/layout';
import { Note } from './Note/Note';

const Workboard = () => {
    const notesList: Array<{ title: string; content: string; isEmpty: boolean, id: number }> = [
        {
            title: 'Go to the university at 10:30am',
            content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus tenetur officiis pariatur veniam sunt, magnam ipsum 
            voluptates reprehenderit, alias error ad dolorum dolor repellat 
            inventore quas architecto nulla officia quia.`,
            isEmpty: false,
            id: 0
        },
        {
            title: 'Go to the university at 10:30am',
            content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus tenetur officiis pariatur veniam sunt, magnam ipsum 
            voluptates reprehenderit, alias error ad dolorum dolor repellat 
            inventore quas architecto nulla officia quia.`,
            isEmpty: false,
            id: 1
        },
        {
            title: 'Go to the university at 10:30am',
            content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus tenetur officiis pariatur veniam sunt, magnam ipsum 
            voluptates reprehenderit, alias error ad dolorum dolor repellat 
            inventore quas architecto nulla officia quia.`,
            isEmpty: false,
            id: 2
        },
        {
            title: 'Go to the university at 10:30am',
            content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus tenetur officiis pariatur veniam sunt, magnam ipsum 
            voluptates reprehenderit, alias error ad dolorum dolor repellat 
            inventore quas architecto nulla officia quia.`,
            isEmpty: false,
            id: 3
        },
        {
            title: 'Go to the university at 10:30am',
            content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus tenetur officiis pariatur veniam sunt, magnam ipsum 
            voluptates reprehenderit, alias error ad dolorum dolor repellat 
            inventore quas architecto nulla officia quia.`,
            isEmpty: false,
            id: 4
        },
        {
            title: 'Go to the university at 10:30am',
            content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus tenetur officiis pariatur veniam sunt, magnam ipsum 
            voluptates reprehenderit, alias error ad dolorum dolor repellat 
            inventore quas architecto nulla officia quia.`,
            isEmpty: false,
            id: 5
        },
        {
            title: 'Go to the university at 10:30am',
            content: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus tenetur officiis pariatur veniam sunt, magnam ipsum 
            voluptates reprehenderit, alias error ad dolorum dolor repellat 
            inventore quas architecto nulla officia quia.`,
            isEmpty: false,
            id: 6
        }
    ]

    const notesComponentlist = notesList.map(({ title, content, isEmpty, id }) => {
        return <Note
            key={`Note_id:${id}`}
            title={title}
            content={content}
            isEmpty={isEmpty} />
    })

    return (
        <SimpleGrid
            p='15px'
            columns={4}
            spacing='15px'
            overflow='auto'
            minChildWidth={280}
            height='fit-content'
            maxHeight='100%'>
            {notesList.length ? notesComponentlist : <Note isEmpty />}
        </SimpleGrid>
    )
}

export default Workboard;