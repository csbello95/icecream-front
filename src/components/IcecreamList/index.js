import React from "react";
import IcecreamCard from "./IcecreamCard";

const IcecreamList = ({ list }) => {
    return (
        list.map((item, i) =>(
            <IcecreamCard key={i} item={item}/>
        ))
    );
};

export default IcecreamList;