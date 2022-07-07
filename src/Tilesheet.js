import { 
    Box,
    HStack,
    Center,
    Image,
} from '@chakra-ui/react'
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import { changeCurrentTile } from './redux/slice/Editor'


export const tileset = [
    'https://imgur.com/RnKhzek.png',
    'https://imgur.com/foYmhmC.png',
    'https://imgur.com/Q60zv9w.png',
    'https://imgur.com/00WU7xX.png',
    'https://imgur.com/b9z7yE1.png',
    'https://imgur.com/Tjc33Vn.png'
]

function TileSheet() {
    const current = useSelector(state => state.editor.currentTile)
    const dispatch = useDispatch()

    function renderTile(i) {
        const img = tileset[i]
        const color = current === i ? "yellow" : "white"
        return (
            <Box
                height={'20px'}
                width={'20px'}
                bg={color}
                onClick={() => dispatch(changeCurrentTile(i))}
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

export default TileSheet;
