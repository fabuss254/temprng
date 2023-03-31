import './SingleSection.scoped.css';

const SingleSection = (props) => {
  return (
    <section style={{"minHeight": props.minHeight ?? "0px"}}>
        <h1>{props.title}</h1>
        <div>
            <div>
                {props.children}
            </div>          
        </div>
    </section>
    );
};

export default SingleSection;