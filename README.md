# FrontendProject


<ul>
  <li>
    Props are passed down from parent to child, while state is managed internally by a component.
  </li>
  <li>
    JSX -
Allow for the writing of HTML-like syntax directly within JavaScript code.
  </li>
  <li>
    UseState provides the state variable and the setter function in an array.
  </li>
  <li>
    Key-
To help React identify items and optimise rendering performance. 
    Keys give elements a stable identity, allowing React to update the UI when the list changes efficiently.
  </li>
<li>
  
 Virtual DOM is a lightweight in-memory representation of the DOM used to improve performance. React updates the Virtual DOM first, then calculates the most efficient way to update the real DOM, minimising costly direct manipulations.
</li>
<li>A variable declared with `let` can be reassigned, while `const` cannot.`const` creates a read-only reference to a value, promoting immutability.</li>
<li> purpose of the `useEffect` hook is to perform side effects in functional components like data fetching, subscriptions, or manually changing the DOM </li>
<li>In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.</li>
<li>The form element’s value is handled by React state management, event Handlers and state updates</li>
<li>effect of passing an empty dependency array `[]` to the `useEffect` hook - An empty dependency array tells React that the effect doesn't depend on any values from props or state, so it runs only once upon mounting.</li>
<li> React Context API primarily helps solve - Avoiding 'prop drilling' by making data available to deeply nested components.</li>
<li>`useCallback` returns a memoised version of the callback function, which prevents unnecessary re-renders of child components that rely on referential equality for props.</li>
  <li>React memo - यह component के रेंडर आउटपुट को मेमोइज़ कर देता है और केवल तभी rerender करता है जब उसके props में थोड़ा बहुत परिवर्तन हुआ हो। </li>
  <li>`useRef` provides a way to access DOM nodes or to store any mutable value that doesn't need to trigger a component re-render when it changes.</li>
  
</ul>
