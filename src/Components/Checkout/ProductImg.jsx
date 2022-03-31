import { useState } from 'react';
import styles from './ProductImg.module.css';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import styled from 'styled-components';
import { useEffect } from 'react';

const Preview = styled.div`
position: absolute;
width: 450px;
height: 450px;
top: 6rem;
left: 50%;
background-image: url(${ (prop) => prop.image});
background-size: ${ (prop) => prop.bgsize} ;
display: ${ (prop) => prop.isHover ? "block" : "none"};
background-position: ${ (prop) => prop.bgpos}
`;

const Selector = styled.div`
position: absolute;
top: ${ (prop) => prop.cursorPos["top"]};
left: ${ (prop) => prop.cursorPos["left"]};
width: 100px;
height: 100px;
background: rgba(153, 152, 152, 0.651);
display: ${ (prop) => prop.isHover ? "block" : "none"};
`;

export default function ProductImg({imgArr}){
    const [img, setImg] = useState(0);
    const [currentImg, setCurrenImg] = useState(img);
    const [hover, setHover] = useState(false);
    const [bgSize, setBgSize] = useState(0);
    const [mouse, setMouse] = useState({"top": 0, "left": 0});
    const [bgPos, setbgPos] = useState("0")
   
    let cx= 450 / 100;
    let cy = cx;    

    useEffect( () => {
        let imgg = document.getElementById('imgId');
        let dimm = (imgg.width * cx);
        let dimm1 = (imgg.height * cy);
        let final = `${dimm}px ${dimm1}px`;
        setBgSize(final)
    }, [img])

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

    const handlePreview = (e) => {
        var pos, x, y;
        e.preventDefault();
        pos = getCursorPos(e);
        x = pos.x - (100 / 2);
        y = pos.y - (100 / 2);
        let imgg1 = document.getElementById('imgId');
        if (x > imgg1.width - 100) {x = imgg1.width - 100;}
        if (x < 0) {x = 0;}
        if (y > imgg1.height - 100) {y = imgg1.height - 100;}
        if (y < 0) {y = 0;}

        let payload = {
            "left": x+"px",
            "top": y+"px"
        }
        setMouse(payload);
        let bggpos = `-${x * cx}px -${y * cy}px`;
        setbgPos(bggpos);
      }
      function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        let imgg1 = document.getElementById('imgId');
        a = imgg1.getBoundingClientRect();
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        console.log("x y", x, y)
        return {x : x, y : y};
      }
    return (
        <>
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

            <div style={{position:"relative", cursor: "crosshair"}}>
                <img id='imgId' src={imgArr[currentImg]} alt="img1" width='95%' onMouseEnter={() => setHover(true)} onMouseMove={handlePreview} onMouseLeave={() => setHover(false)}/>
                <Selector id='lens' isHover={hover} cursorPos={mouse}>
                </Selector>
            </div>
        </div>

        <Preview image={imgArr[img]} isHover={hover} bgsize={bgSize} bgpos={bgPos}>

        </Preview>

        </>


    )
}