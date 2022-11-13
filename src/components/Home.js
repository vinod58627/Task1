import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Dash from './Dash'
import Chart from './Chart'
import Forms from './Forms'

const Home = () => {
  return (<div className="row m-0 p-0">
              <div className="col-lg-2" style={{position: 'sticky'}}>
                <Nav />
              </div>
              <div className="col-lg-10">
              <Header />
                <Dash />
                <div className="bg-light">
                   <Chart />
                </div>
                <div>
                   <Forms />
                </div>
            
              
                
              </div>
              
          </div>
          
        
  )
}

export default Home