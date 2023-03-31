import './Section.scoped.css';

const Section = (props) => {
  return (
    <section style={{"minHeight": props.minHeight ?? "0px"}}>
        <h1>{props.title}</h1>
        <div>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>          
        </div>
    </section>
    );
};

export default Section;