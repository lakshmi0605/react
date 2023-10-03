const heading = React.createElement("h1",{id:"heading1", abc: "xyz"},"Hello World from React");
const parent1 = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"heading"},"h1 tag nested")));

const parent2 = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},heading));

const parent3 = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading1", abc: "xyz"},"Hello World from h1"), React.createElement("h2",{id:"heading1", abc: "xyz"},"Hello World from h2")] ), React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading1", abc: "xyz"},"Hello World from h1"), React.createElement("h2",{id:"heading1", abc: "xyz"},"Hello World from h2")] )]);


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent2);

root.render(parent3);