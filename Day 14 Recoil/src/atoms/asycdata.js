import { atom, selector} from "recoil";

export const asyncmyNetworrkAtom = atom({
        key: "asyncmyNetworrkAtom",
       default: {
        notification: 0,
        jobs: 0,
        messaging: 0,
        network: 0,
       }
});

export const subTotallAtom = selector({
    key: "subTotallAtom",
    get: ({get}) => {
        const asyncmyNetwork = get(asyncmyNetworrkAtom);
        return asyncmyNetwork.jobs + asyncmyNetwork.messaging + asyncmyNetwork.notification + asyncmyNetwork.network
    }
})