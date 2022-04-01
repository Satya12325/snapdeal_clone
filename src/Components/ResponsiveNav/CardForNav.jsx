import {Link} from "react-router-dom"




export default function Cards({image,name,link}){



    return(
        <Link to={link} style={{textDecoration: 'none',color: 'black'}}>
        <div style={{margin:"10px",textAlign:"center"}}>
            <div style={{height:"",width:"100px",padding:"10px",border:"3px solid gray"}}>
           <img style={{height:"100&",width:"100%"}} src={image} alt="" />

            </div>
           <p>{name}</p>
        </div>
        </Link>
    )
}