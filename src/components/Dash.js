import React from 'react'
import './Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup, faCartShopping, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'


const Dash = () => {
  return (<div className="row m-0" style={{display: 'flex', width: '100%', margin: 'auto', justifyContent:'space-evenly' }}>
          <div style={{display: 'flex', width:'30%' ,justifyContent:'space-between'}}  className="col-lg-3 m-2 p-4 bg-light">
            <div>
                <h3 className="hi">Clients</h3>
                <p className="p1">512</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} style={{fontSize: '40px', color:'red'}} />
            </div>
          </div>
          <div style={{display: 'flex',width:'30%', justifyContent:'space-between'}} className="col-lg-3 m-2 p-4 bg-light">
            <div>
                <h3 className="hi">Sales</h3>
                <p className="p1">$7,770</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCartShopping} style={{fontSize: '40px', color:'red'}} />
            </div>
          </div>
          <div style={{display: 'flex', width:'30%',justifyContent:'space-between'}} className="col-lg-3 m-2 p-4 bg-light">
            <div>
                <h3 className="hi">Performance</h3>
                <p className="p1">256%</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faArrowTrendUp} style={{fontSize: '40px', color:'red'}} />
                

            </div>
          </div> 
</div>)
}

export default Dash