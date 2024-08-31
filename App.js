import React from "react";
import ReactDOM from "react-dom/client";

// JSX (Transpiled before it reaches the JS) - PARCEL - BABEL

//JSX=> Babel transpiles it to React.createElement => ReactElement -JS Object => HTMLElement(render)


const elem= <span> React spand tag </span>
const JsxHeading = (
   
<h1  id="heading"> 
    {elem}
     hello im JSXx</h1>
)
console.log(JsxHeading)
//functional component
const HeadingComponent = () => (
    
    
    <div id="container">
        {/* <JsxHeading/>    */}
        {JsxHeading}
        <h1 className="heading">Namste React Functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)