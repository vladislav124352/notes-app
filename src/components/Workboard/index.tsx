import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react'
import { Note } from './Note/Note';

const Workboard = () => {
    return (
        <SimpleGrid minChildWidth={250} columns={4} p='15px' spacing='15px'>
            <Note
                title={'Take a shower'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Fugit saepe porro obcaecati, eum sit voluptas dolorem reprehenderit
                dolorum a accusamus error, provident maxime sequi laborum esse?
                Neque quia eaque error.`} />
            <Note
                title={'Go to the bathroom at 6:30 pm'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi impedit quis dolores ipsa et quod molestias esse facere officia, 
                similique deleniti provident aut nihil ratione nam ex. 
                Labore, asperiores quos!`} />
            <Note
                title={'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi impedit quis dolores ipsa et quod molestias esse facere officia, 
                similique deleniti provident aut nihil ratione nam ex. 
                Labore, asperiores quos!`} />
            <Note
                title={'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi impedit quis dolores ipsa et quod molestias esse facere officia, 
                similique deleniti provident aut nihil ratione nam ex. 
                Labore, asperiores quos!`} />
            <Note
                title={'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi impedit quis dolores ipsa et quod molestias esse facere officia, 
                similique deleniti provident aut nihil ratione nam ex. 
                Labore, asperiores quos!`} />
            <Note
                title={'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi impedit quis dolores ipsa et quod molestias esse facere officia, 
                similique deleniti provident aut nihil ratione nam ex. 
                Labore, asperiores quos!`} />
            <Note
                title={'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi impedit quis dolores ipsa et quod molestias esse facere officia, 
                similique deleniti provident aut nihil ratione nam ex. 
                Labore, asperiores quos!`} />
            <Note
                title={'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi impedit quis dolores ipsa et quod molestias esse facere officia, 
                similique deleniti provident aut nihil ratione nam ex. 
                Labore, asperiores quos!`} />
            <Note
                title={'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla'}
                content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quasi impedit quis dolores ipsa et quod molestias esse facere officia, 
                similique deleniti provident aut nihil ratione nam ex. 
                Labore, asperiores quos!`} />
        </SimpleGrid>
    )
}

export default Workboard;