import { RecoilRoot, useRecoilState, useRecoilStateLoadable} from "recoil";
import { todoSelectorFamily } from "../atoms/selectorfamily";

//selectorFamily is a way to create a family of selectors that are related to each other.
// selectofamily use for complex data fetching, caching, manipulation and validation. 
function SelectorFamily() {
    return <RecoilRoot>
        {/* <Todos id={1}/> 
        <Todos id={2}/> */}
        <Todos id={3}/>
    
        </RecoilRoot>
}

function Todos({id}){
    const [todo, setTodo] = useRecoilStateLoadable(todoSelectorFamily(id));

    if(todo.state === "loading"){
        return <div>Loading...</div>
    } else if(todo.state === "hasValue"){
        return(
            <div key={todo.contents.id}>
            {todo.contents.id}
            {todo.contents.title}
            {todo.contents.description}
            <br/>
            </div>
        )
    } else if (todo.state === "hasError"){
        return <div>Error</div>
    }
}

export default SelectorFamily;