import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "../todos";
import axios from "axios";

//atomFamily is a way to create a family of atoms that are related to each other.


export const todoSelectorFamily = atomFamily({
    key: "todoSelectorFamily",
    default: selectorFamily({
        key: "todoSelector2Family",
        get: (id) => async ({get}) => {
            const res = await axios.get(`https://internshipapi.onrender.com/internship/${id}`);
            return res.data;
        },
    })
})