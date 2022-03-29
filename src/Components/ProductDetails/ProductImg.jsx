import { useState } from 'react';

import styles from './ProductImg.module.css';


export default function ProductImg({image}){
  
   
    return (
        <div className={styles.imgCont}>
            <div >
                
            </div>

            <div>
                <img src={image} alt="img1" width='95%'/>
            </div>
        </div>
    )
}