import { atom, selector} from "recoil";

export const myNetworkAtom = atom({
        key: "myNetworkAtom",
        default: 102,
});

export const jobsAtom = atom({
        key: "jobsAtom",
        default: 0,
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 12,
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 0,
});

export const subTotalAtom = selector({
    key: "subTotalAtom",
    get: ({get}) => {
        const myNetworkk = get(myNetworkAtom);
        const jobss = get(jobsAtom);
        const messagingg = get(messagingAtom);
        const notificationn = get(notificationAtom);
        return myNetworkk + jobss + messagingg + notificationn
    }
})