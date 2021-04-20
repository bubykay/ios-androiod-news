import {devToolsEnhancer} from 'redux-devtools-extension'
import socialReducer from './social'
import {createStore} from 'redux'


const store = createStore(socialReducer, devToolsEnhancer)

export default store
