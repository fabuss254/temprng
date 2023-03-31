import { useState, useEffect } from "react";
import "./CardTable.scoped.css";
import SingleSection from "../SingleSection/SingleSection";
import CardItem from "../CardItem/CardItem";

const CardTable = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (items.length > 0) return;

        fetch("http://localhost:3000/Carte.json")
        .then(res => res.json())
        .then((result) => {
            setItems(result.filter(r => r.categorie === props.category));
        })
    }, []);

    return (
        <SingleSection 
        title={props.title}
        children={
            <div className="Ctn-Card">
                {items.map((Data, Index) => {
                    console.log("hello there !")
                    return (
                        <CardItem
                            key={Index}
                            nom={Data.nom}
                            prix={Data.prix}
                            image={Data.image}
                        />
                    );
                })}
            </div>
            
        }
        />
    );
};

export default CardTable;