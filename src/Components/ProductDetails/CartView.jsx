import {RiCloseFill} from 'react-icons/ri';
import {BsHeart} from 'react-icons/bs';

import styles from './CartView.module.css';
import { useState } from 'react';

export default function CartView({product,handelRemove}){
    const [count, setCount] = useState(1);

  return (
    <div className={styles.th}>
      <div style={{display:"flex"}}>
          <div style={{marginRight:"20px"}}>
              <img src={product.images[0]} width="60px"/>
          </div>
          <div>
              <div>
                  <p>{product.title}</p>
                  <p>Colour: Default | Size: {product.sizes}</p>
              </div>

              <div style={{display:"flex"}}>
                  <div className={styles.action}><RiCloseFill onClick={handelRemove} style={{marginRight:"0.5rem"}} size="1.3rem"/>REMOVE</div> | 
                  <div className={styles.action}><BsHeart style={{marginRight:"0.5rem"}}/>MOVE TO SHORTLIST</div>
              </div>
          </div>
          
      </div>
      <div>Rs. {product.discounted_price}</div>
      <div>
          <select onChange={(e) => setCount(e.currentTarget.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
          </select>
      </div>
      <div>Check availability and delivery charges for your pincode</div>
      <div>Rs. {product.discounted_price * count}</div>
  </div>
  )
}