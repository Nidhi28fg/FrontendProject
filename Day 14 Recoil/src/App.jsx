import Memo from './component/Memo';
import Atom from './component/Atom';
import Selector from './component/Selector';
import DeepdiveRecoil from './component/DeepdiveRecoil';
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
    </div>
  );
};

export default App;