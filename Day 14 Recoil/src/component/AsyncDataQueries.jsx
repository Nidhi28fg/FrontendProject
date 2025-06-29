import {  RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { useEffect} from "react";
import axios from "axios";
import { asyncmyNetworrkAtom, subTotallAtom } from "../atoms/asycdata";


function AsyncDataQueries() {
  return (
    <div>
      <RecoilRoot>
        <Deepdive />
      </RecoilRoot>
    </div>
  );
}

function Deepdive() {
    const [data, setData] = useRecoilState(asyncmyNetworrkAtom);
    const subTotalAtom = useRecoilValue(subTotallAtom)

    useEffect(() => {
    axios.get("https://dummyjson.com/c/afbf-44bf-4934-bb37")
    .then(res => {
        setData(res.data);
        console.log(res.data);
    })
  }, [])
  

  return (
    <div>
      <button>Home</button><br/>

      <button>My Network ({data.network >= 100 ? "99+" : data.network})</button><br/>
      <button>Jobs {data.jobs} </button><br/>
      <button>Messaging {data.messaging}</button><br/>
      <button> {data.notification} </button><br/>
      <button> Me</button><br/>
      <button>Total value from selector: {subTotalAtom}</button><br/>
        </div>
  );
}


export default AsyncDataQueries;
