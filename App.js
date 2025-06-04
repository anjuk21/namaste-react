
// 1) how to nested in react 
/*
<div id="parent">
<div id="child">
<h1>i am h1 tag</h1>
</div>
</div>
*/
 
// code for 1)

// const parent = React.createElement(
//     "div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"i am h1 tag"))
// );
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);

//  2) how to nested in react with more sibling ,with using arry
/*
<div id="parent">
<div id="child">
<h1>i am h1 tag</h1>
<h2> i am h2 tag</h2>
</div>
</div>
*/
// code for 2)

// const parent = React.createElement(
//     "div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")])
// );
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);

//  3) how to nested more child in react ,with using arry
/*
<div id="parent">
<div id="child1">
<h1>i am h1 tag</h1>
<h2> i am h2 tag</h2>
</div>
<div id="child2">
<h1>i am h1 tag</h1>
<h2> i am h2 tag</h2>
</div>
</div>
*/
 
// code for 3)

// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//    [ React.createElement("div",{id:"child1"},
//     [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]) ,
//     React.createElement("div",{id:"child2"},
//     [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")])
//    ]
//    );
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(parent);

const heading = React.createElement("h1",{id:"heading",xyz:"something"},"Hello World! from react");
console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);