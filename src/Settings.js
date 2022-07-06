import React, { useState } from 'react'
import { Heading, Select, Divider, Center, Button } from '@chakra-ui/react'
import { 
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper 
} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
} from '@chakra-ui/react'


function Settings() {
    const [columns, setCols] = useState(20)
    const [rows, setRows] = useState(20)
    const [tileWidth, setTileWidth] = useState(16)
    const [tileHeight, setTileHeight] = useState(16)

    return (
    <>
        <Heading as='h2' size='xl'>Settings</Heading>
        <FormControl>
            { numberField('columns', 'Columns', columns, 1, 24, setCols) }
            { numberField('rows', 'Rows', rows, 1, 24, setRows) }
            <FormLabel htmlFor='inferenceImage'>Inference Image</FormLabel>
            <Select id='inferenceImage' placeholder=''>
            </Select>
            { fixedField('tileWidth', 'Tile Width', tileWidth, 24) }
            { fixedField('tileHeight', 'Tile Height', tileHeight, 24) }
        </FormControl>
        <Divider />
        <Center>
            <Button>{'Import image for inference'}</Button>
        </Center>
    </>
    )
}
export default Settings;

function numberField(name, title, value, min, width, update) {
    return (
    <>
        <FormLabel htmlFor={name}>{title}</FormLabel>
        <NumberInput
            defaultValue={value}
            min={min}
            maxW={width}
            onChange={(_, n) => update(n)}
        >
            <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>
    </>
    )
}

function fixedField(name, title, value, width) {
    return (
    <>
        <FormLabel htmlFor={name}>{title}</FormLabel>
        <NumberInput
            defaultValue={value}
            min={value}
            max={value}
            maxW={width}
        >
            <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
        </NumberInput>
    </>
    )
}
