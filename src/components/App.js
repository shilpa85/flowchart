import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ShapeContainer from './shape-container';
import DiagramContainer from './diagram-container';
import rootReducer from '../reducers/index';

import './App.css';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
		<Provider store={store} >
			<ShapeContainer />
			<DiagramContainer />
		</Provider>
    </div>
  );
}

export default App;
