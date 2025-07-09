//Explain the difference between controlled and uncontrolled components in React. Provide code examples for both.
//A controlled component is a component whose form data is controlled by React state. The component's value is set via useState and updated via onChange.
export default function ControlAndUncontrol() {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");
    return (
        <div>
            <input type="text" ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}

//An uncontrolled component manages its own state internally. Instead of using state, we use a ref to directly access the DOM element’s value.
export function UncontrolledInput() {
    const inputRef = useRef(null);
  
    const handleClick = () => {
      alert(`Input Value: ${inputRef.current.value}`);
    };
  
    return (
      <div>
        <h2>Uncontrolled Component</h2>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Show Input Value</button>
      </div>
    );
  }