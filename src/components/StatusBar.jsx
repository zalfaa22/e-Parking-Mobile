import React from 'react'
import "./css/statusBar.css"

export default function StatusBar() {
  return (
    <div className='component-container'>
    <div className='statusbar d-flex align-items-center justify-content-between'>
        <div>14:42</div>
        <div className='d-flex align-items-center'>
            <img src="../assets/Connection.svg" className='me-2' alt="" />
            <img src="../assets/Wifi.svg" className='me-2' alt="" />
            <img src="../assets/Battery.svg" alt="" />
        </div>
    </div>
    </div>
  )
}
