import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    const menu=["Table", "Forms", "Profile", "Login", "Submenus"]
  return (<div className="m-0 p-0 vi" style={{position: 'absolute'}}>
        <div className="p-3 text-white bg-dark">
            <h3>Admin <b> One</b></h3>
        </div>
    <div className="bg-secondary p-3 ">
        
        
            <ul className="list-group">
                <h4>GENERAL</h4>
                <li className="list-item" aria-current="true"><FontAwesomeIcon icon={faDesktop} style={{fontSize: '20px', color:'white', paddingRight:'10px'}} />Dashboard</li>
            </ul>
        
        
            <ul className="list-group">
                <h4>Examples</h4>
                {
                    menu.map((res)=>(<li key={res} className="list-item " style={{textDecoration: 'none'}}><FontAwesomeIcon icon={faDesktop} style={{fontSize: '20px', color:'white', paddingRight:'10px'}} />{res}</li>))
                }
            </ul>
      
        
            <ul className="list-group">
                <h4>ABOUT</h4>
                <li className="list-item"><FontAwesomeIcon icon={faDesktop} style={{fontSize: '20px', color:'white', paddingRight:'10px'}} />About</li>
                <li className="list-item"><FontAwesomeIcon icon={faDesktop} style={{fontSize: '20px', color:'white', paddingRight:'10px'}} />GitHub</li>
            
            </ul>
       
    </div>
  
  </div>)
}