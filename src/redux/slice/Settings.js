import { createSlice } from '@reduxjs/toolkit'


export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        columns: 2,
        rows: 10,
        tileWidth: 16,
        tileHeight: 16,
        inferenceImage: 'default',
        images: ['default'],
    },
    reducers: {
        incCol: (state) => { state.columns += 1 },
        decCol: (state) => { state.columns -= 1 },
        setCol: (state, col) => { state.columns = col },
        setRow: (state, row) => { state.rows = row },
        setTileWidth: (state, width) => { state.tileWidth = width },
        setTileHeight: (state, height) => { state.tileHeight = height },
        setImage: (state, image) => { state.inferenceImage = image },
        addImage: (state, image) => { state.images.push(image) },
    }
})

// actions
export const { incCol, setCol, setRow, setTileWidth, setTileHeight, setImage, addImage } = settingsSlice.actions
export default settingsSlice.reducer
