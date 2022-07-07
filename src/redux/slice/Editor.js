import { createSlice } from '@reduxjs/toolkit'
// import { } from './slice/Settings'


export const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        currentTile: 0,
        tiles: []  // [[x, y, data]]
    },
    reducers: {
        changeCurrentTile: (state, id) => { state.currentTile = id.payload },
        placeTile: (state, data) => { state.tiles.push(data.payload)},
        clearImage: state => { state.tiles = [] },
    }
})

export const { changeCurrentTile, placeTile, clearImage } = editorSlice.actions
export default editorSlice.reducer
