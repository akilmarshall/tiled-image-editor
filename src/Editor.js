import React, { useState } from 'react'
import { 
    Heading,
    Image,
    HStack,
    Divider,
    Box, 
    Center,
} from '@chakra-ui/react'

const tileset = [
    'https://imgur.com/RnKhzek.png',
    'https://imgur.com/foYmhmC.png',
    'https://imgur.com/Q60zv9w.png',
    'https://imgur.com/00WU7xX.png',
    'https://imgur.com/b9z7yE1.png',
    'https://imgur.com/Tjc33Vn.png'
]

function TileSheet({selected}) {
    const [current, setSelected] = useState(selected)

    function renderTile(i) {
        const img = tileset[i]
        const color = current === i ? "yellow" : "white"
        return (
            <Box
                height={'20px'}
                width={'20px'}
                bg={color}
                onClick={() => setSelected(i)}
            >        
                <Center>
                    <Image id={i} src={img} />
                </Center>
            </Box>
        )
    }
    return (
        <HStack>
            {tileset.map((_, n) => renderTile(n))}
        </HStack>
    )
}

function Editor(props) {
    const {columns, rows} = props

    let image = []
    for (let i = 0; i < columns; i++) {
        let row = []
        for (let j = 0; j < rows; j++ ) {
            row.push((i + j) % 6)
        }
        image.push(row)
    }

    function renderRow(row) {
        return (
        <HStack spacing='0px'>
            {row.map(i => <Image src={tile(i)}/>)}
        </HStack>
        )
    }

    function renderImage() {
        return (
        <>
            {image.map(renderRow)}
        </>
        )
    }

    return (
    <>
        <Heading as='h2' size='xl'>Editor</Heading>
        <div id="tileGrid">
            {renderImage()}
        </div>
        <Divider />
        <TileSheet selected={0} />
    </>
    )
}
export default Editor;

function tile(i) {
    return tileset[i]
}
