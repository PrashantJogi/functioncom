import React, { useState } from 'react';

const Formfields = () =>{
    const [userData ,  setUserData] = useState({name:"",mobile:""})
    const [userArr , setuserArr] = useState([])
    const change = (e) =>{
        
        const { name, value } = e.target; 
        setUserData(()=>{
       
            return{...userData,[name]:value}
        })
    }

    const submit = () =>{
        setuserArr(()=>{
             return [...userArr, userData];
        })
        setUserData(()=>{
            return{name:"",mobile:""}
        })
    }
    
    return (
      <>
        <label>Enter Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={change}
        />

        <label>Enter MobileNumber</label>
        <input type="text" name="mobile" value={userData.mobile} onChange={change} />

        <button onClick={() => submit()}>Submit</button>
        <table>
          <thead>
            <tr>
              <td>UserName</td>
              <td>User MobileNumber</td>
            </tr>
          </thead>
          <tbody>
            {userArr.length > 0 &&
              userArr.map((e) => {
                return (
                  <>
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.mobile}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </>
    );
}

export default Formfields;