import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Feedback from "./components/Feedback"
import Dashboard from "./components/Dashboard"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {
  
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Feedback />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
