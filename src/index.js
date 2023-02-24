import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Pace404 from './views/pace404'
import Ajanda from './views/ajanda'
import Register from './views/register'
import Loginbutton from './views/loginbutton'
import History from './views/history'
import Mainmenu from './views/mainmenu'
import Enjoy from './views/enjoy'
import Nature from './views/nature'
import Hotels from './views/hotels'
import Foods from './views/foods'
import Transport from './views/transport'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Pace404} exact path="/pace404" />
        <Route component={Ajanda} exact path="/ajanda" />
        <Route component={Register} exact path="/register" />
        <Route component={Loginbutton} exact path="/loginbutton" />
        <Route component={History} exact path="/history" />
        <Route component={Mainmenu} exact path="/mainmenu" />
        <Route component={Enjoy} exact path="/enjoy" />
        <Route component={Nature} exact path="/nature" />
        <Route component={Hotels} exact path="/hotels" />
        <Route component={Foods} exact path="/foods" />
        <Route component={Transport} exact path="/transport" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
