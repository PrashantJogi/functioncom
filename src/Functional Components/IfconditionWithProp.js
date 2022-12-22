import React, { useState } from 'react';

const Child = ({data}) =>{
    
    if(data){

    return(<>
        <h1>True</h1>
    </>)
    }else{
        return(<>
            <h1>False</h1>
        </>)
    }
}

const IfconditionWithProp = () =>{
    const [data ,  setData] = useState(false)
    return (
      <>
        <button onClick={() => setData(!data)}>Click</button>
        <Child data={data}/>
      </>
    );
}
export default IfconditionWithProp