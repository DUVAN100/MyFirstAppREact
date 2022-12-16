import React from "react";
import '../sytlessheets//Testimony.css';

//cREAMOS UUN COMPONENTE
function Testimony(props){
    //estructura del  componentr
    return(
        <div className="container-testimony">
            <img
             className="img-testimony"
             src={require(`../images/${props.images }.jpg`)}
             alt='Foto' />
             <div className="container-text-testimony">
                <p className="name-testimony">
                    <strong>{props.name}</strong> en {props.country}
                    </p>
                <p className="job-testimony" style={{fontWeight: "bold"}}>
                    {props.job} en {props.business}
                    </p>
                <p className="text-testimony">
                    {props.testimony}
                    </p>
             </div>
        </div>
    );
}
export default Testimony;