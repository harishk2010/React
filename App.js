const heading = React.createElement("h1", { id: "heading" }, "Hello world , React");


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello im H1 tag"), React.createElement("h1", {}, "Hello im H1 tag")]
    ),React.createElement("div", { id: "child2" },
        [React.createElement("h2", {}, "Hello im H2 tag"), React.createElement("h2", {}, "Hello im H2 tag")]
    )]
)
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)