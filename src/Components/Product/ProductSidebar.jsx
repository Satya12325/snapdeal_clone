import React from 'react'
// import { PriceRange } from './PriceRange'
import styles from './ProductSidebar.module.css'
export const ProductSidebar = ({catagory, product,diff1,diff2,diff3}) => {
  return (
    <div className={styles.overallcontainer}>
        <div className={styles.filterarea}>
            <ul>
                <li>-{catagory}
                    <ul>
                        <li>{product}
                            <ul style={{color:"black",listStyleType:"none" }}>
                                <li style={{margin:"5px"}}>{diff1}</li>
                                <li style={{margin:"5px"}}>{diff2}</li>
                                <li style={{margin:"5px"}}>{diff3}</li>
                            </ul>
                        </li>

                    </ul>
                </li>

            </ul>
            <hr/>
            {/* <PriceRange /> */}

        </div>

    </div>
  )
}
