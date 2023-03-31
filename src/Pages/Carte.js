import CardTable from "../Components/CardTable/CardTable";

function Carte() {
  return (
    <div style={{display: "flex", "flex-direction": "column"}}>
      <CardTable title="Entrées" category="entrées" />
      <CardTable title="Plats" category="plats"  />
      <CardTable title="Desserts" category="desserts" />
    </div>
  );
}

export default Carte;