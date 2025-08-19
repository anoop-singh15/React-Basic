import React from "react";

const Hello=()=>{


    // With JSX

    // return (
    //     <div className="dummyClass">
    //         <h1>
    //             Hello From hello.js
    //         </h1>
    //     </div>
    // );


    // Without JSX
    return React.createElement('div',
        
        {id:'hello',className: 'dummyClass'},
        React.createElement('h1',null,'Hello from createElement')
    );
};

export default Hello;
