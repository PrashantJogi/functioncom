import React from 'react';

 const Child = ({data}) =>{
    return (
      <>
        <table>
          <thead>
            <tr>
              <td>Employe Name</td>
              <td>Employe Email</td>
              <td>Employe Gender</td>
              <td>Employe Status</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((e) => {
                return (
                  <>
                    <tr>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.gender}</td>
                      <td>{e.status}</td>
                    </tr>
                  </>
                );
              })}
            
          </tbody>
        </table>
      </>
    );
 }

const EmployeList = () =>{

    return (
      <>
        <Child
          data={[
            {
              id: 3403,
              name: "Ahalya Pothuvaal Jr.",
              email: "jr_ahalya_pothuvaal@goldner.name",
              gender: "female",
              status: "active",
            },
            {
              id: 3402,
              name: "Girja Pothuvaal",
              email: "girja_pothuvaal@kuphal-walsh.biz",
              gender: "female",
              status: "inactive",
            },
            {
              id: 3367,
              name: "Ojaswini Marar VM",
              email: "ojaswini_vm_marar@harris-emard.io",
              gender: "female",
              status: "inactive",
            },
            {
              id: 3366,
              name: "Agrata Menon",
              email: "menon_agrata@mohr-schoen.name",
              gender: "female",
              status: "inactive",
            },
            {
              id: 3365,
              name: "Durgeshwari Iyengar",
              email: "iyengar_durgeshwari@kuhn.biz",
              gender: "male",
              status: "inactive",
            },
            {
              id: 3364,
              name: "Rev. Bharadwaj Mishra",
              email: "rev_mishra_bharadwaj@erdman.info",
              gender: "female",
              status: "inactive",
            },
            {
              id: 3320,
              name: "Digambar Prajapat",
              email: "digambar_prajapat@schulist.io",
              gender: "male",
              status: "active",
            },
            {
              id: 3317,
              name: "Agniprava Mahajan",
              email: "agniprava_mahajan@hills.name",
              gender: "female",
              status: "inactive",
            },
            {
              id: 3316,
              name: "Vimal Chattopadhyay",
              email: "chattopadhyay_vimal@johns-williamson.info",
              gender: "female",
              status: "inactive",
            },
            {
              id: 3278,
              name: "Tanirika Gupta",
              email: "gupta_tanirika@cummings.net",
              gender: "female",
              status: "inactive",
            },
          ]}
        />
      </>
    );
}

export default EmployeList;