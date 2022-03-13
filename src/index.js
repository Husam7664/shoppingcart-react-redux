import React from 'react'
import ReactDOM from 'react-dom'
import App from './page/App'
import './style/index.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './reducer/Reducer'

//redux store
const store = createStore(Reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
