# Darkmode in next 13 using styled-components

This project demonstrates how to possibly implement a dark mode using styled-components and use-local-storage-state in a next.js 13 environment.

---

## These are the iterations

### 1. ThemeProvider approach

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

> 💡 Not quite sure about this approach yet. Wrote a custom hook `useDunkel` that stores darkMode decisions in cookies, which can be accessed via getServerSideProps for that "no flicker" approach. Still work in progress.

- [x] switches between light and dark theme
- [x] preferred scheme respected
- [x] decision remembered
- [x] works with server-side rendering

Run the development server:

```bash
npm run dev
```
