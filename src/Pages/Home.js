import Slider from "./../Components/Slider/Slider";
import Section from "./../Components/Section/Section";

function Home() {
  return (
    <div style={{display: "flex", "flex-direction": "column"}}>
      <Slider 
        images={["./SliderImg/Img1.jpg", "./SliderImg/Img2.jpg", "./SliderImg/Img3.jpeg", "./SliderImg/Img4.jpg"]}
      />
      <Section 
        title="Le chef"
        minHeight="300px"
        left={
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita quos assumenda accusantium itaque ad. Quod, vitae quae voluptates culpa totam.</p>
        } 
        right={
          <img style={{aspectRatio: "1/1", width: "300px"}} src="./chef.jpg"/>
        } 
      />
      <Section 
        title="Le restaurant"
        minHeight="300px"
        left={
          <img style={{aspectRatio: "1/1", width: "300px"}} src="./restaurant.jpg"/>
        } 
        right={
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita quos assumenda accusantium itaque ad. Quod, vitae quae voluptates culpa totam.</p>
        } 
      />
    </div>
  );
}

export default Home;