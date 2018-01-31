import React from 'react'
import { render } from 'react-dom'
// import { configureStore, history } from './store/configureStore'
// import Root from './containers/Root'
import Main from './components/Main'

// const store = configureStore()

// Most top-level rendering that is the actual file that renders to the client's screen

render(
    <Main />,
    document.getElementById('root')
)