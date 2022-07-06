import React, { useState } from 'react'
import { 
    Heading,
    Image,
    HStack,
    Divider,
    Box, 
    Center,
    Button,
    Text,
} from '@chakra-ui/react'
import TileSheet, { tileset } from './Tilesheet'
import { useSelector } from 'react-redux'


function Editor(props) {
    const {_columns, rows} = props

    const columns = useSelector(state => state.settings.columns)

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
    }

    function renderRow(row) {
        return (
        <>
            <HStack spacing='0px'>
                {row.map(([x, y, i]) => <Image src={tile(i)} onClick={() => {updateImage(x, y)}} />)}
            </HStack>
        </>
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
        <Text>{columns}</Text>
        <Text>{rows}</Text>
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
