import { useState } from 'react';

import styles from './ProductImg.module.css';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

export default function ProductImg({imgArr}){
    const [img, setImg] = useState(0);
    const [currentImg, setCurrenImg] = useState(img)

    // console.log("current Img = ", imgArr[currentImg], imgArr[0], currentImg, img)

    // let imgArr = [img1, img2, img3, img4, img5, img6];

    const slider = (pointer) => {
        if(pointer >= 0){
            setImg(pointer);
        }

        else if(pointer+4 < imgArr.length){
            setImg(pointer);
        }
    }

    const handleCurrentImg = (current) => {
        setCurrenImg(current)
    }
    return (
        // <div className={styles.imgCont}>
        //     <div >
        //         <div>
        //             <div className={img? styles.visible : styles.hidden}> <RiArrowUpSLine size="2rem" color='rgb(226, 224, 224)' onClick={() => slider(img - 1)}/> </div>
        //             <div className={styles.img} onMouseOver={() => handleCurrentImg(img)}> <img src={imgArr[img]} width="100%"/> </div>
        //             <div className={styles.img} onMouseOver={() => handleCurrentImg(img+1)}> <img src={imgArr[img+1]} width="100%"/> </div>
        //             <div className={styles.img} onMouseOver={() => handleCurrentImg(img+2)}> <img src={imgArr[img+2]} width="100%"/> </div>
        //             <div className={styles.img} onMouseOver={() => handleCurrentImg(img+3)}> <img src={imgArr[img+3]} width="100%"/> </div>
        //             <div className={imgArr[img+4]? styles.visible : styles.hidden}> <RiArrowDownSLine size="2rem" color='rgb(226, 224, 224)' onClick={() => slider(img + 1)}/> </div>
        //         </div>
        //     </div>

        //     <div>
        //         <img src={imgArr[currentImg]} alt="img1" width='95%'/>
        //     </div>
        // </div>



        <div className={styles.imgCont}>
            <div >
                <div>
                    <div className={img? styles.visible : styles.hidden}> <RiArrowUpSLine size="2rem" color='rgb(226, 224, 224)' onClick={() => slider(img - 1)}/> </div>
                    <div className={styles.img} onMouseOver={() => handleCurrentImg(img)}> <img src={imgArr[img]} width="100%"/> </div>
                    { imgArr[img+1] && <div className={styles.img} onMouseOver={() => handleCurrentImg(img+1)}> <img src={imgArr[img+1]} width="100%"/> </div> }
                    { imgArr[img+2] && <div className={styles.img} onMouseOver={() => handleCurrentImg(img+2)}> <img src={imgArr[img+2]} width="100%"/> </div> }
                    { imgArr[img+3] && <div className={styles.img} onMouseOver={() => handleCurrentImg(img+3)}> <img src={imgArr[img+3]} width="100%"/> </div> }
                    <div className={imgArr[img+4]? styles.visible : styles.hidden}> <RiArrowDownSLine size="2rem" color='rgb(226, 224, 224)' onClick={() => slider(img + 1)}/> </div>
                </div>
            </div>

            <div>
                <img src={imgArr[currentImg]} alt="img1" width='95%'/>
            </div>
        </div>




    )
}