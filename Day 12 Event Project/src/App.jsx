import HilightsOfSuccessfulEvent from "./component/HilightsOfSuccessfulEvent.jsx";
import Header from './component/Header'
import Eventpage from './pages/Eventpage'
import Upcoming from "./component/Upcoming.jsx";

const App = () => {
  return (
    <>
    <Header/>
      <Eventpage/>
      <Upcoming/>
    <div className="font-bold">
      <HilightsOfSuccessfulEvent />
    </div></>
  )
}

export default App
