import {combineReducers } from 'redux';
import flowchartReducer from './reducer-flowchart';

const rootReducer = combineReducers({
	canvas: flowchartReducer
	
});


export default rootReducer;