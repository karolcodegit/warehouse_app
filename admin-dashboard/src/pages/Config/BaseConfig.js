import React, { useEffect, useState } from 'react'
import Wizard from '../../components/Wizard/Wizard'

const Group = (props) => {
    const [roles, setRoles] = useState([])

    useEffect(() => {
        fetch('http://localhost:8081/api/roles')
          .then(response => response.json())
          .then(data => setRoles(data));
      }, []);
    return (
      <div>
        <h2>Group</h2>
      </div>
    );
  };
  
  const Step2 = (props) => {
    return (
      <div>
        <h2>Step 2</h2>
      </div>
    );
  };
  
  const Step3 = (props) => {
    return (
      <div>
        <h2>Step 3</h2>
      </div>
    );
  };


const BaseConfig = () => {
  return (
    <Wizard steps={[
        { title: 'Group Configuration', component: Group },
        { title: 'Network Settings', component: Step2 },
        { title: 'Finalize Setup', component: Step3 },
      ]} />
  )
}

export default BaseConfig