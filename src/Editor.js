import React, { useState } from 'react'
import { 
    Heading,
    Image,
    HStack,
    Divider,
    Box, 
    Center,
    Button,
} from '@chakra-ui/react'
import TileSheet, { tileset } from './Tilesheet'


function Editor(props) {
    const {columns, rows} = props

    let image = []
    for (let y = 0; y < rows; y++) {
        let row = []
        for (let x = 0; x < columns; x++) {
            row.push([x, y, 1])  // [x, y, data]
        }
        image.push(row)
    }

    function updateImage(x, y) {
        // update image[x][y] to the currently selected tile in the tile sheet
        // TODO use the currently selected tile instead of always 0
        // image[x][y] = 0
        console.log('update image at ', x, y)
    }

    function renderRow(row) {
        return (
        <HStack spacing='0px'>
            {row.map(([x, y, i]) => <Image src={tile(i)} onClick={() => {updateImage(x, y)}} />)}
        </HStack>
        )
    }

    function renderImage() {
        console.log('render')
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
        <Button onClick={() => {updateImage(0, 0)}}>Debug</Button>
    </>
    )
}
export default Editor;

function tile(i) {
    return tileset[i]
}
