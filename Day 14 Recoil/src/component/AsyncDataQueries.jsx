import {
  RecoilRoot,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  jobsAtom,
  messagingAtom,
  myNetworkAtom,
  notificationAtom, subTotalAtom
} from "../atoms/deepdiverecoil";
import { useEffect, useMemo } from "react";
import axios from "axios";


function AsyncDataQueries() {
  return (
    <div>
      {/* Recoil is a state management library for React. Benefits of Recoil: 
         - Easy to use, simple to understand and implement
         - Easy to debug and test
         -Easy to share state between components
         - remove the need for prop drilling
         - reduce the number of re-renders
         - faster than redux

         //RecoilRoot is the root of the Recoil state tree. It is the parent of all the atoms and selectors. */}
      <RecoilRoot>
        <Deepdive />
      </RecoilRoot>
    </div>
  );
}

function Deepdive() {
  
  const [notification, setNotification] = useRecoilState(notificationAtom);
//   const subTotalsel = useRecoilValue(subTotalAtom)

  // useEffect is a React Hook used to **perform side effects** in function components. 
  // This includes, but is not limited to, **fetching data from APIs**, setting up subscriptions, manually changing the DOM, and timers. 
  // It runs after every render by default, but its execution can be controlled by a dependency array to run only when specific values change or once after the initial render.
 // axios is used to fetch data from the api and set
  useEffect(() => {
    axios.get("https://dummyjson.com/c/afbf-44bf-4934-bb37")
    .then(res => {
        setNotification(res.data)
    })
  }, [])
  

  return (
    <div>
      <button>Home</button><br/>

      {/* <button>My Network ({setMyNetwork >= 100 ? "99+" : setMyNetwork})</button><br/>
      <button>Jobs {setJobs} </button><br/>
      <button>Messaging {setMessaging}</button><br/> */}
      <button> This is a button to update the recoil state
        Notification {notification}
      </button><br/>

      {/* <button>Me</button><br/>
      <button>Total value from useMemo:{subTotal}</button><br/> */}
      {/* <button>Total value from selector: {subTotalsel}</button><br/> */}

      {/* <ButtonNotification /> */}
    </div>
  );
}
// function ButtonNotification() {
//   // when we want to only update the state, we use useSetRecoilState
//   const setNotification = useSetRecoilState(notificationAtom);
//   return (
//     <button onClick={() => setNotification((c) => c + 1)}>Notification</button>
//   );
// }

export default AsyncDataQueries;
