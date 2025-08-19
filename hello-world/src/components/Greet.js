import React from "react";

// function Greet()
// {
//     return <h1>Hello World 2</h1>;
// }



// 1 way of destructuring
// const Greet = ({name,Age}) => {
//     console.log(props.name);
//     props.name="XYZ";
//     return (
//         <div>
//             <h1>Hello {name} Age = {Age} !!!</h1>
//             {props.children}
//         </div>
//     );
// }


// 2nd Way of Destructuring

const Greet = (props) => {


    const {name,Age}=props;
    
    
    return (
        <div>
            <h1>Hello {name} Age = {Age} !!!</h1>
            {/* {props.children} */}
        </div>
    );
}


// export const Greet=()=><h1>Hello World!!!!</h1>;

export default Greet;