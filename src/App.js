import Switch from "@mui/material/Switch";
import { useState } from "react";
import CounterState from "./Functional Components/CounterState";
import EmployeList from "./Functional Components/EmployeList";
import Formfields from "./Functional Components/Formfields";
import IfconditionWithProp from "./Functional Components/IfconditionWithProp";
import IfWithCompo from "./Functional Components/IfWithCompo";
import LifeCycle from "./Functional Components/LifeCycle";
import ParentToChild from "./Functional Components/ParentToChild";
import SimpleComFunc from "./Functional Components/SimpleComFunc";
import Turnery from "./Functional Components/Turnery";

function App() {
  const [show, setShow] = useState({
    simpleComponent: false,
    parentTochild: false,
    EmployeList: false,
    IfconditionWithProp: false,
    turnery: false,
    ifWithCompo: false,
    counterState: false,
    Formfields: false,
    LifeCycle:false,
  });
 
  return (
    <div className="App">
      <h1>Using functional component</h1>
      <label>Simple component</label>
      <Switch
        onChange={() => setShow({ simpleComponent: !show.simpleComponent })}
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />
      <label>Parent To Child using props component</label>
      <Switch
        onChange={() => setShow({ parentTochild: !show.parentTochild })}
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />
      <label>EmployeList component</label>
      <Switch
        onChange={() => setShow({ EmployeList: !show.EmployeList })}
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />
      <label>If condition with props component</label>
      <Switch
        onChange={() =>
          setShow({ IfconditionWithProp: !show.IfconditionWithProp })
        }
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />
      <label>Using Turnery operator component</label>
      <Switch
        onChange={() => setShow({ turnery: !show.turnery })}
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />
      <label>If condtion with component</label>
      <Switch
        onChange={() => setShow({ ifWithCompo: !show.ifWithCompo })}
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />
      <label>Counter State component</label>
      <Switch
        onChange={() => setShow({ counterState: !show.counterState })}
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />
      <label>Form fields component</label>
      <Switch
        onChange={() => setShow({ Formfields: !show.Formfields })}
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />

      <label>LifeCycle component</label>
      <Switch
        onChange={() => setShow({ LifeCycle: !show.LifeCycle })}
        inputProps={{ "aria-label": "controlled" }}
      />
      <br />
      {show.simpleComponent && (
        <>
          <SimpleComFunc />
        </>
      )}
      {show.parentTochild && (
        <>
          <ParentToChild />
        </>
      )}
      {show.EmployeList && (
        <>
          <EmployeList />
        </>
      )}
      {show.IfconditionWithProp && (
        <>
          <IfconditionWithProp />
        </>
      )}
      {show.turnery && (
        <>
          <Turnery />
        </>
      )}
      {show.ifWithCompo && (
        <>
          <IfWithCompo />
        </>
      )}
      {show.counterState && (
        <>
          <CounterState />
        </>
      )}
      {show.Formfields && (
        <>
          <Formfields />
        </>
      )}
      {show.LifeCycle && (
        <>
          <LifeCycle />
        </>
      )}
    </div>
  );
}

export default App;
