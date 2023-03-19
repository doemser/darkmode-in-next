# Darkmode in next 13 using styled-components

This project demonstrates how to possibly implement a dark mode using styled-components and use-local-storage-state in a next.js 13 environment.

---

## Approach

In our GlobalStyles, we declare the color variables using CSS custom properties and an if-else statement that depends on the 'darkMode' prop. The 'theme' object defines the colors for both light and dark modes.

In our Styled Components, we then exclusively use CSS variables for colors.

---

## These are the iterations

### 1. Concept

- [x] switches between light and dark theme
- [ ] preferred scheme respected
- [ ] decision remembered
- [x] works with server-side rendering

## [![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/darkmode-hwyff4?file=/src/App.js)

---

### 2. Respect preferred scheme

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [ ] decision remembered
- [ ] works with server-side rendering

## [![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/darkmode-media-query-vv4i5p?file=/src/App.js)

---

### 3. Remember user decision

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [x] decision remembered
- [ ] works with server-side rendering

## [![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/darkmode-media-query-localstorage-cnfb5j?file=/src/App.js)

---

### 4. Work server-side

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [x] decision remembered
- [x] works with server-side rendering

Run the development server:

```bash
npm run dev
```

---

### 5. Write a custom hook

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [x] decision remembered
- [x] works with server-side rendering

## [![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/darkmode-usedarkmode-hook-u0io4f?file=/src/App.js)

> One major benefit of this approach is that it avoids the need to pass the `setDarkMode` function down through multiple levels of components. You can just import the hook to any component you need it in. localStorage is used like a global state.
>
> This approach is similar to modern global state management libraries like zustand.js or jotai, which make it easy to define and manage global state in a React application.
>
> By using a centralized state store, it's possible to avoid "prop drilling" and make the management of state much simpler and more efficient.
