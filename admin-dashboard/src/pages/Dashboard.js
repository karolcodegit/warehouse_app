import React from 'react'
import BarFilter from '../components/BarFilter/BarFilter'
import BoxResult from '../components/BoxResult/BoxResult'
import ButtonUpdate from '../components/Button/ButtonUpdate'

const Dashboard = () => {
  return (
    <>
        <BarFilter>
            <ButtonUpdate />
        </BarFilter>
        
          <BoxResult name="Outbound" value="1,234" procent="12%" />
          <BoxResult name="Outbound" value="1,234" procent="12%" />
          <BoxResult name="Outbound" value="1,234" procent="12%" />
       
    </>
  )
}

export default Dashboard