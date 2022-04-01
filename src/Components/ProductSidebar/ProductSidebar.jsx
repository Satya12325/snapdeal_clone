import React from 'react'
import { PriceRange } from './PriceRange'
import styles from './ProductSidebar.module.css'
export const ProductSidebar = () => {
  return (
    <div className={styles.overallcontainer}>
        <div className={styles.filterarea}>
            <ul>
                <li>- Men's & Clothing
                    <ul>
                        <li>Shirts For Men
                            <ul style={{color:"black",listStyleType:"none" }}>
                                <li style={{margin:"5px"}}>Casual Shirts For Men</li>
                                <li style={{margin:"5px"}}>Formal Shirts For Men</li>
                                <li style={{margin:"5px"}}>Men's Party Wear Shirts</li>
                            </ul>
                        </li>

                    </ul>
                </li>

            </ul>
            <hr/>
            <PriceRange />

        </div>

    </div>
  )
}
