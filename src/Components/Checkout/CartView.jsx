import {RiCloseFill} from 'react-icons/ri';
import {BsHeart} from 'react-icons/bs';
import img2 from '../../Images/img2.jpg';
import styles from './CartView.module.css';

export default function CartView(){
  return (
    <div className={styles.th}>
      <div style={{display:"flex"}}>
          <div style={{marginRight:"20px"}}>
              <img src={img2} width="60px"/>
          </div>
          <div>
              <div>
                  <p>Pelvic Red Loafers</p>
                  <p>Colour: Red | Size: 10</p>
              </div>

              <div style={{display:"flex"}}>
                  <div className={styles.action}><RiCloseFill style={{marginRight:"0.5rem"}} size="1.3rem"/>REMOVE</div> | 
                  <div className={styles.action}><BsHeart style={{marginRight:"0.5rem"}}/>MOVE TO SHORTLIST</div>
              </div>
          </div>
          
      </div>
      <div>Rs. 319</div>
      <div>
          <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
          </select>
      </div>
      <div>Check availability and delivery charges for your pincode</div>
      <div>Rs. 319</div>
  </div>
  )
}