import Memo from './component/Memo';
import Atom from './component/Atom';
import Selector from './component/Selector';
import DeepdiveRecoil from './component/DeepdiveRecoil';
import AsyncDataQueries from './component/AsyncDataQueries';
import AtomFamily from './component/AtomFamily';
import SelectorFamily from './component/SelectorFamily';
import Otp from './component/Otp';
const App = () => {
  return (
    <div>
      <h1>Atom</h1>
      <Atom/>
      <h1>Memo</h1>
      <Memo />
      <h1>Selector</h1>
      <Selector/>
      <h1>DeepDiveRecoil</h1>
      <DeepdiveRecoil/>
      <h1>AsyncDataQueries</h1>
      <AsyncDataQueries/>
      <h1>AtomFamily</h1>
      <AtomFamily/>
      <h1>SelectorFamily</h1>
      <SelectorFamily/>
      <h1>Otp</h1>
      <Otp/>
    </div>

  );
};

export default App;