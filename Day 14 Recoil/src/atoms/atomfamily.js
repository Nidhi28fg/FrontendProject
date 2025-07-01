import { atomFamily } from "recoil";
import { TODOS } from "../todos";

//atomFamily is a way to create a family of atoms that are related to each other.


export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: (id) => {
        return TODOS.find((todo) => todo.id === id)
    },
})