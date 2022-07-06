import React from 'react'
import { Heading, Text, Link } from '@chakra-ui/react'
import {
    ListItem,
    UnorderedList
} from '@chakra-ui/react'

function Home() {
    return (
    <>
        <Heading as='h2' size='xl'>Home</Heading>
        <Text>
            {'Welcome to the Tiled Imaged Editor. '}
            {'It is a tool for constructing images from tile sheets with the aid of machine inference.'}
        </Text>
        <UnorderedList>
            <ListItem>{'Import arbitrary tiled images'}</ListItem>
            <ListItem>{'With algorithmic assistance construct new tiled images'}</ListItem>
        </UnorderedList>
        <Text>
        {'The editor is built on top of the '}
        <Link color='blue' href='https://github.com/akilmarshall/procedural-image-generation'>{'tiled-image-tool'}</Link>
        .
        </Text>
    </>
    )
}
export default Home;
