import React from "react";

const Detail = ({name , age}) =>{
    const BirthYear = () => new Date().getFullYear() - age;

    return(
        <div>
            <p>
                Hello {name}, age {age}
            </p>
            <p>
                Born in {BirthYear()}
            </p>
        </div>
    )
};

const Greeting = (props) => {
    const name = 'Nabil';
    const age = 25;
    return (
        <div>
            <Detail name={"maya"} age={20+10}/>
            <Detail name={name} age={age}/>
        </div>
    )
};
export default Greeting;