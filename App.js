const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am from h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am from h2 tag"),
  ])
);

const new1 = React.createElement("div", {}, "I am new element");

//JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World, Rupa React."
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root")); //Put h1 into DOM so use ReactDOM

root.render(new1);
