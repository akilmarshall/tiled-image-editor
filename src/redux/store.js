import { configureStore } from '@reduxjs/toolkit'
import settingsReducer from './slice/Settings'


export default configureStore({
    reducer: {
        settings: settingsReducer
    }
})
