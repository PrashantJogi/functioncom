import React from 'react';

const Child = ({ student }) => {
  return (
    <>
      <h1>Student name is {student.Name}</h1>
      <h1>Student age is {student.Age}</h1>
    </>
  );
};

const ParentToChild = () =>{
    const data = {Name:"raju",Age:26}
    return (
      <>
        <Child student={data} />
      </>
    );
}

export default ParentToChild;