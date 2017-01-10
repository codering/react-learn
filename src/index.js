import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import hashHistory from 'react-router/lib/hashHistory'

import './index.html'
import router from './router'

const App = router({history: hashHistory})

ReactDOM.render(App, document.getElementById('root'))
