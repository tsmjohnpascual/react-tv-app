import React from "react";

const ShowCard = ({data}) => {

    return <div className="show-card">
            {data["image"] && <img src={data["image"]["medium"]} />}
            {/* <img src={ data["image"] ?  data["image"]["medium"] : "" } />  */}
            <h2>{data.name}</h2>
            {/* <p>{data.summary}</p> */}
            <p dangerouslySetInnerHTML={{__html: data.summary}} role="paragraph"></p>
           </div>

}

export default ShowCard;