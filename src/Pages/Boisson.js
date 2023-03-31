import CardTable from "../Components/CardTable/CardTable";

function Boisson() {
  return (
    <div style={{display: "flex", "flex-direction": "column"}}>
      <CardTable title="Boissons" category="boissons" />
    </div>
  );
}

export default Boisson;