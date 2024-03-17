import React from "react";
export const Title = (props) =>{
    return(
        // <div className="titleProt">
        //     <div className="title">
        //         <h2>{props.title}</h2>
        //     </div>
        //     <div className="textTitle">
        //         <p>{props.children}</p>
        //     </div>
        // </div>
        <div className="brix---inner-container-547px">
            <div className="brix---mg-bottom-40px">
                <h3 className="h4 wavy-underline">{props.title}</h3>
                <div className="left-p-text">
                <p>{props.children}</p>
                </div>
            </div>
        </div>
    )
}