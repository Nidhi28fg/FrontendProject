import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, myNetworkAtom, notificationAtom } from "../atoms/deepdiverecoil";

function DeepdiveRecoil() {
    return (
        <div>
            <RecoilRoot>
                <Deepdive/>

            </RecoilRoot>
        </div>
    )
}

function Deepdive() {
    const setMyNetwork = useRecoilValue(myNetworkAtom);
    const setJobs = useRecoilValue(jobsAtom);
    const setMessaging = useRecoilValue(messagingAtom);
    const setNotification = useRecoilValue(notificationAtom);
    
    return (
        <div>
            <button>Home</button>
            
            <button>My Network ({setMyNetwork >= 100 ? "99+" : setMyNetwork})</button> 
            <button>Jobs </button>
            <button>Messaging</button>
            <button>Notification</button>

            <button>Me</button>
        </div>
    )
}


export default DeepdiveRecoil;