import "./Contact.scoped.css"

function Contacts() {
  return (
    <div style={{display: "flex", "flex-direction": "column"}}>
      <h1>Contactez-nous</h1>
      <form action="mailto:contact@latabledechantal.com" method="post" enctype="text/plain">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required/><br/>

        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required/><br/>

        <label for="message">Contenu :</label>
        <input id="text" type="text" name="text" required/><br/>

        <label for="message">Contenu :</label>
        <textarea id="message" name="message" required></textarea><br/>

        <input type="submit" value="Envoyer"/>
        <input type="reset" value="Effacer"/>
      </form>
    </div>
  );
}

export default Contacts;