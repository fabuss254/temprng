import "./CardItem.scoped.css";

const CardItem = (props) => {
    return (
        <div className="card">
            <div className="card-image" style={{backgroundImage: "url('" + props.image + "')"}}></div>
            <div className="card-content">
                <h2>{props.nom}</h2>
                <p>{props.prix.toFixed(2)} €</p>
            </div>
        </div>
    );
};

export default CardItem;