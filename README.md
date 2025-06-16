This second image elaborates on the difficulty of rebuilding a blockchain once it has been tampered with and why an altered blockchain would be rejected by the network.

Here's a note combining the insights from both images, focusing on the immutability and consensus mechanisms of a blockchain:

---

**Blockchain Invalidation and the Challenge of Alteration**

The integrity of a blockchain hinges on its immutability and the consensus mechanism of its distributed network. Any attempt to alter data within a blockchain effectively invalidates that chain and faces significant hurdles to be accepted by the network.

**1. Invalidation of Individual Blocks and Chain Reaction:**
* **Data Change:** If any data is changed within a block (e.g., as mentioned, "Zero rupees"), that specific block becomes invalid.
* **Nonce Invalidation:** The "nonce," which is a crucial component in the block's hash calculation (derived from the current block's data and the previous block's hash), is no longer valid.
* **Cascading Effect:** Since each subsequent block's hash is cryptographically linked to the previous block's hash, changing one block renders all following blocks in that specific chain invalid. This means "every block becomes invalid" from the point of alteration onwards.

**2. The Challenge of Rebuilding and Network Rejection:**
* **Time-Consuming Rebuilding:** An attacker attempting to change a blockchain (e.g., starting from the beginning to alter data) would need a "long time to rebuild" the entire chain from the point of alteration. This involves recalculating all subsequent nonces and hashes.
* **Network Progress:** While an attacker is rebuilding their altered chain, the "honest blocks would have moved forward." The legitimate network of miners continues to add new, valid blocks (e.g., if an attacker is at block 5, the honest network might have moved to blocks 6, 7, 8, 9, 10, and beyond).
* **Consensus and the Longest Chain Rule:** Even if an attacker manages to "Fork a blockchain" and rebuild an altered version, "all the other miners will eventually reject your blockchain because it is smaller than the longest one." The fundamental principle of most proof-of-work blockchains is that the longest chain (the one with the most cumulative computational work) is considered the legitimate and valid chain. An attacker's altered chain will inherently be shorter and therefore rejected by the majority of the network.

In summary, the distributed nature, cryptographic links, and consensus mechanisms (like the longest chain rule) make it virtually impossible for a malicious actor to successfully alter a blockchain and have that altered version accepted by the network. This ensures the security and trustworthiness of blockchain technology.

------------------------------------------------------------


# web3

**Blockchain Invalidation**

A blockchain becomes invalid if any data within a block is changed. Here's a breakdown of the process described:

* **Impact of Data Change:** If data is changed in any block (e.g., "Zero rupees" mentioned in the text), it invalidates that specific block.
* **Nonce Invalidation:** The "nonce" (a number used in the blockchain's proof-of-work system) for the altered block is no longer valid. This is because the nonce is calculated based on the data of the current block and the hash of the previous block.
* **Chain Reaction:** Changing data in one block causes a ripple effect.
    * The hash of the altered block changes.
    * Because subsequent blocks rely on the hash of the previous block to calculate their own nonce, all subsequent blocks in the chain also become invalid.
* **"Every block becomes invalid":** As stated in the text, if a "bad actor" changes data, the entire chain from that point forward is compromised, making "every block invalid."

In essence, the immutability of data is fundamental to a blockchain's integrity. Any alteration breaks the cryptographic links between blocks, rendering the entire chain from the point of alteration onwards invalid.



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
<li>In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where the DOM itself handles form data.</li>
<li>The form element’s value is handled by React state management, event Handlers and state updates</li>
<li>effect of passing an empty dependency array `[]` to the `useEffect` hook - An empty dependency array tells React that the effect doesn't depend on any values from props or state, so it runs only once upon mounting.</li>
<li> React Context API primarily helps solve - Avoiding 'prop drilling' by making data available to deeply nested components.</li>
<li>`useCallback` returns a memoised version of the callback function, which prevents unnecessary re-renders of child components that rely on referential equality for props.</li>
  <li>React memo - यह component के रेंडर आउटपुट को मेमोइज़ कर देता है और केवल तभी rerender करता है जब उसके props में थोड़ा बहुत परिवर्तन हुआ हो। </li>
  <li>`useRef` provides a way to access DOM nodes or to store any mutable value that doesn't need to trigger a component re-render when it changes.</li>
  
</ul>


# web3

**Blockchain Invalidation**

A blockchain becomes invalid if any data within a block is changed. Here's a breakdown of the process described:

* **Impact of Data Change:** If data is changed in any block (e.g., "Zero rupees" mentioned in the text), it invalidates that specific block.
* **Nonce Invalidation:** The "nonce" (a number used in the blockchain's proof-of-work system) for the altered block is no longer valid. This is because the nonce is calculated based on the data of the current block and the hash of the previous block.
* **Chain Reaction:** Changing data in one block causes a ripple effect.
    * The hash of the altered block changes.
    * Because subsequent blocks rely on the hash of the previous block to calculate their own nonce, all subsequent blocks in the chain also become invalid.
* **"Every block becomes invalid":** As stated in the text, if a "bad actor" changes data, the entire chain from that point forward is compromised, making "every block invalid."

In essence, the immutability of data is fundamental to a blockchain's integrity. Any alteration breaks the cryptographic links between blocks, rendering the entire chain from the point of alteration onwards invalid.
