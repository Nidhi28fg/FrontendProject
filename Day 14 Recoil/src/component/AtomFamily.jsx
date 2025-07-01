import { RecoilRoot, useRecoilValue} from "recoil";
import { todoAtomFamily } from "../atoms/atomfamily";

//autoFamily is a way to create a family of atoms that are related to each other.
function AtomFamily() {
    return (
        <>
        <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2}/>
        </RecoilRoot>
        </>
    )
}

function Todo({id}){
    const todo = useRecoilValue(todoAtomFamily(id));
    return(
        <>
        {todo.title}
        {todo.description}
        </>
    )
}

export default AtomFamily;