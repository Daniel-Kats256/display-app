import { useState } from "react";
// import PropTypes from 'prop-types'
interface Props{
    name: string;
    age: number;
} 


function Student({name, age}: Props) {
  return (
    <>
      <div className="student">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </>
  );
}

// Student.propTypes = {
//     name: propTypes.string;
//     age: propTypes.number;
// }
export default Student;
