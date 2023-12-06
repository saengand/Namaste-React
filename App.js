
// const heading = React.createElement("h1", {}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
  * <div id="parent">
  *     <div id="child">
  *         <h1>I'm h1 tag</h1>
  *     </div> 
  * </div>
  * 
  * ReactElement(Object) => HTML(Browser Understands)
  */

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        React.createElement("h1",{},"I am h1 tag")
    )
)


const heading = React.createElement("h1",{},"Hello World From React!");
const root = ReactDOM.creaeRoot(document.getElementById("root"));
root.render(heading);

 