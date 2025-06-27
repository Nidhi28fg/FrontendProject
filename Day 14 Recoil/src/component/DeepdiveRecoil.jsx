import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { jobsAtom, messagingAtom, myNetworkAtom, notificationAtom } from "../atoms/deepdiverecoil";

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
                <Deepdive/>

            </RecoilRoot>
        </div>
    )
}

function Deepdive() {
    //when we want to read the state, we use useRecoilValue
    const setMyNetwork = useRecoilValue(myNetworkAtom);
    const setJobs = useRecoilValue(jobsAtom);
    const setMessaging = useRecoilValue(messagingAtom);
    // when we want to read and update the state, we use useRecoilState
    const [notification, setNotification] = useRecoilState(notificationAtom);
    
    return (
        <div>
            <button>Home</button>
            
            <button>My Network ({setMyNetwork >= 100 ? "99+" : setMyNetwork})</button> 
            <button>Jobs {setJobs} </button>
            <button>Messaging {setMessaging}</button>
            <button onClick={() => setNotification(c => c + 1)}>Notification {notification}</button>

            <button>Me</button>

            <ButtonNotification/>
        </div>
    )
}
function ButtonNotification() {
    // when we want to only update the state, we use useSetRecoilState 
    const setNotification = useSetRecoilState(notificationAtom);
    return (
        <button onClick={() => setNotification(c => c +1 )}>Notification</button>
    )
}

export default DeepdiveRecoil;