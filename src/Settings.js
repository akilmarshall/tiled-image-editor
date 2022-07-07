import React from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import {
    setCol,
    setRow,
} from './redux/slice/Settings'


function Settings() {
    const columns = useSelector((state) => state.settings.columns)
    const rows = useSelector(state => state.settings.rows)
    const tileWidth = useSelector(state => state.settings.tileWidth)
    const tileHeight = useSelector(state => state.settings.tileHeight)
    const image = useSelector(state => state.settings.inferenceImage)
    const dispatch = useDispatch()

    function updateCol(n) {
        // helper function to update redux state
        dispatch(setCol(n))
    }
    
    function updateRow(n) {
        // helper function to update redux state
        dispatch(setRow(n))
    }

    function columnControl(value) {
        return (
        <>
            <FormLabel htmlFor={"columns"}>{"Columns"}</FormLabel>
            <NumberInput
                defaultValue={value}
                min={1}
                maxW={24}
                onChange={(_, n) => updateCol(n)}
            >
                <NumberInputField />
            </NumberInput>
        </>
        )
    }

    function rowControl(value) {
        return (
        <>
            <FormLabel htmlFor={"rows"}>{"Rows"}</FormLabel>
            <NumberInput
                defaultValue={value}
                min={1}
                maxW={24}
                onChange={(_, n) => updateRow(n)}
            >
                <NumberInputField />
            </NumberInput>
        </>
        )
    }

    return (
    <>
        <Heading as='h2' size='xl'>Settings</Heading>
        <FormControl>
            { columnControl(columns) }
            { rowControl(rows) }
            <FormLabel htmlFor='inferenceImage'>Inference Image</FormLabel>
            <Select id='inferenceImage' placeholder={image}>
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

