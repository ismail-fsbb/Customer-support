# React Basics - Questions and Answers
---

## 1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML.  
It is used in React to make writing UI easier and more readable.  
With JSX, we can write HTML inside JavaScript, and React converts it into actual DOM elements.

## What is the Difference Between State and Props?
---

## State

- State is **data that belongs to a component itself**.  
- It can **change over time** (mutable).  
- When state changes, the component **re-renders** automatically.  

## State

- Props are data passed from one component to another (usually parent → child).
- Props are read-only, meaning a component cannot change its own props.
- Used to make components reusable and dynamic.

## What is the useState hook, and how does it work?
---
The **useState** hook is one of the most commonly used hooks in React.  
It allows **functional components** to have their own **state** — data that can change over time.

---

## What is `useState`?

`useState` is a built-in React Hook that lets you **add state** to a functional component.  
When the state changes, React automatically **re-renders** the component to update the UI.

---

## Syntax

```jsx
const [state, setState] = useState(initialValue);
```

## How Can You Share State Between Components in React?
---
In React, sometimes you need **two or more components** to use the **same piece of data**.  
To do this, you need to **share state** between components.

### The Main Idea

You **can’t directly share state** between sibling components.  
Instead, you **move the state up** to their **common parent** — this is called **“Lifting State Up.”**

Then the parent passes that state and functions down to its children through **props**.

## How is Event Handling Done in React?

In React, **event handling** is very similar to handling events in regular HTML,  
but there are a few key differences — React uses **camelCase syntax** and you pass a **function**, not a string.