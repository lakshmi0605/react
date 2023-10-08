import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading1", abc: "xyz"},"Hello World from React");
// const parent1 = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"h1 tag nested")));

// const parent2 = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},heading));

// const parent3 = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading1", abc: "xyz"},"Hello World from h1"), React.createElement("h2",{id:"heading1", abc: "xyz"},"Hello World from h2")] ), React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading1", abc: "xyz"},"Hello World from h1"), React.createElement("h2",{id:"heading1", abc: "xyz"},"Hello World from h2")] )]);
let Heading4;


const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(Heading4);
root.render(Heading4 );


//React element
const heading1 = <h1>React element</h1>;

//React Component
const Heading2 = () => <h1>React element heading 2</h1>;

const Heading3 = ()=> <div><h2>React functional component in heading 3</h2></div>;

// Component Conposition
Heading4 = ()=> <div><Heading3 /><h2>React functional component in heading 4</h2></div>;
