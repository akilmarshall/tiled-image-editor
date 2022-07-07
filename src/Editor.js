import React, { useState } from 'react'
import { 
    Heading,
    Image,
    HStack,
    VStack,
    Divider,
    Box, 
    Center,
    Button,
    Text,
} from '@chakra-ui/react'
import TileSheet, { tileset } from './Tilesheet'
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import { placeTile, clearImage } from './redux/slice/Editor'


function Editor() {
    const columns = useSelector(state => state.settings.columns)
    const rows = useSelector(state => state.settings.rows)
    const currentTile = useSelector(state => state.editor.currentTile)
    const tiles = useSelector(state => state.editor.tiles)
    const dispatch = useDispatch()


    function updateImage(x, y) {
        // update image[x][y] to the currently selected tile in the tile sheet
        dispatch(placeTile([x, y, currentTile]))
    }

    // TODO: render tiles, unstructured data
    function buildImage() {
        let image = []
        for (let r = 0; r < rows; r++) {
            let row = []
            for (let c = 0; c < columns; c++) {
                row.push([c, r, 0])
            }
            image.push(row)
        }
        for (let i = 0; i < tiles.length; i++) {
            const [x, y, t] = tiles[i]
            image[x][y] = [x, y, t]
        }
        return image
    }
    function renderTile([x, y, i]) {
        return (
            <Image src={tile(i)} onClick={() => {
                updateImage(y, x)
            }} />
        )
    }
    function renderRow(row) {
        return (
        <HStack spacing='0px'>
            {row.map(renderTile)}
        </HStack>
        )
    }

    function renderImage() {
        const image = buildImage()
        // console.log("row 0", image[0])
        // console.log("row 1", image[1])
            // {renderRow(image[0])}
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
        <TileSheet selected={currentTile} />
        <Button onClick={() => { updateImage(0, 0) }}>debug</Button>
        <Button onClick={() => { dispatch(clearImage()) }}><Text>Clear</Text></Button>
    </>
    )
}
export default Editor;

function tile(i) {
    if (0 <= i && i < tileset.length) {
        return tileset[i]
    }
    return ""
}
