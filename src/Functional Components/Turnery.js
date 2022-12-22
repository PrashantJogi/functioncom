import React, { useState } from 'react';

const Child = ({ data }) => {
    return(<>
        {data ? (<><h1>True</h1></>):(<><h1>False</h1> </>)
        }

    </>)
};

const Turnery = () =>{
    const [data, setData] = useState(false);
   return (
     <>
       <button onClick={() => setData(!data)}>Click</button>
       <Child data={data} />
     </>
   );
}

export default Turnery