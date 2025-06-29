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
import { useMemo } from "react";


function DeepdiveRecoil() {
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
  //when we want to read the state, we use useRecoilValue
  const setMyNetwork = useRecoilValue(myNetworkAtom);
  const setJobs = useRecoilValue(jobsAtom);
  const setMessaging = useRecoilValue(messagingAtom);
  // when we want to read and update the state, we use useRecoilState
  const [notification, setNotification] = useRecoilState(notificationAtom);
  const subTotalsel = useRecoilValue(subTotalAtom)
//   useMemo is used to **memoize a computed value**, preventing its recalculation on subsequent renders if its dependencies (state or props) have not changed. This **optimizes the performance of the re-render** by avoiding redundant expensive operations, but doesn't prevent the component from re-rendering itself.
//   A selector is a function that returns a value based on the state or props. It is **not a Hook**.
//   A selector, especially when memoized (e.g., using `reselect` with `useSelector` in React-Redux), helps to **avoid unnecessary re-renders of components** by providing a stable reference to a derived value. The component only re-renders if the *output of the selector* truly changes.
//   The difference between useMemo and a selector is that useMemo is used to memoize a value **within the component**, and a selector is used to memoize a **derived value from state** (often global state in a state management library).
//   The difference between useMemo and useCallback is that useMemo is used to memoize a **value**, and useCallback is used to memoize a **function itself** to maintain its reference across renders.

  const subTotal = useMemo(() => {
    return setMyNetwork + setJobs + setMessaging + notification;
  }, [setMyNetwork, setJobs, setMessaging, notification]);

  return (
    <div>
      <button>Home</button><br/>

      <button>My Network ({setMyNetwork >= 100 ? "99+" : setMyNetwork})</button><br/>
      <button>Jobs {setJobs} </button><br/>
      <button>Messaging {setMessaging}</button><br/>
      <button onClick={() => setNotification((c) => c + 1)}> This is a button to update the recoil state
        Notification {notification}
      </button><br/>

      <button>Me</button><br/>
      <button>Total value from useMemo:{subTotal}</button><br/>
      <button>Total value from selector: {subTotalsel}</button><br/>

      <ButtonNotification />
    </div>
  );
}
function ButtonNotification() {
  // when we want to only update the state, we use useSetRecoilState
  const setNotification = useSetRecoilState(notificationAtom);
  return (
    <button onClick={() => setNotification((c) => c + 1)}>Notification</button>
  );
}

export default DeepdiveRecoil;
