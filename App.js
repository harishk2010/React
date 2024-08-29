const heading = React.createElement("h1", {id:"heading"}, "Hello world , React");

const root = ReactDOM.createRoot(document.getElementById("root"));

setTimeout(root.render(heading),4000)