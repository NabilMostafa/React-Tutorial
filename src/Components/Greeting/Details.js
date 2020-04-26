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

export default Detail;