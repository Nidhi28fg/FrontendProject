import HilightsOfSuccessfulEvent from "./component/HilightsOfSuccessfulEvent.jsx";
import Header from './component/Header';
import Eventpage from './pages/Eventpage';
import Upcoming from "./component/Upcoming.jsx";
import Fifth from './pages/Fifth.jsx'

const App = () => {
  return (
    <>
    <Header/>
      <Eventpage/>
      <Upcoming/>
    <div className="font-bold">
      <HilightsOfSuccessfulEvent />
    </div>
     <Fifth/>
    </>
  )
}

export default App
