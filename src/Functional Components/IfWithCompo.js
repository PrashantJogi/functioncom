import React, { useState } from 'react';

const Child = () => {
  return(<>
    <h1>Child Component</h1>
  </>)
};

const Parent = ({data}) =>{
    return(<>
        {(()=>{
            if(data && <Child/>){
                return <Child/>
            }
        })()}
    </>)
}
const IfWithCompo = () =>{
    const [data ,  setData] = useState(false);
    return (
      <>
        <button onClick={() => setData(!data)}>Click</button>
        <Parent data={data} />
      </>
    );
}

export default IfWithCompo;