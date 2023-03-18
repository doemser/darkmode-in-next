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
- [x] runs server-side

## [![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/darkmode-hwyff4?file=/src/App.js)

---

### 2. Respect preferred scheme

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [ ] decision remembered
- [ ] runs server-side

## [![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/darkmode-media-query-vv4i5p?file=/src/App.js)

---

### 3. Remember user decision

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [x] decision remembered
- [ ] runs server-side

## [![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/darkmode-media-query-localstorage-cnfb5j?file=/src/App.js)

---

### 4. Work server-side

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [x] decision remembered
- [x] runs server-side

Run the development server:

```bash
npm run dev
```

---

### 5. Write a custom hook

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [x] decision remembered
- [x] runs server-side

## [![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/darkmode-usedarkmode-hook-u0io4f?file=/src/App.js)