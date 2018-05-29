import * as React from "react"
import { render } from "react-dom"
import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  Switch
} from "react-router-dom"

import { Ant } from "./components/Ant"

interface appProps {}
interface appState {}

const Demo = (props: any) => {
  console.log(props)
  return (
    <div>
      <div>测试</div>
      <Link to="/ant">About</Link>
    </div>
  )
}

class App extends React.Component<appProps, appState> {
  public render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Demo} />
          <Route path="/ant" component={Ant} />
        </Switch>
      </div>
    )
  }
}

render(
  <HashRouter>
    <App />
  </HashRouter>,
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  document.getElementById("example")
)
