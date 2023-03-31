import { useEffect, useState } from "react";
import "./Slider.scoped.css";

function Slider(props) {
    const [curIndex, setCurrentIndex] = useState(0);

    const length = props.images.length;

    const nextSlide = () => {
        setCurrentIndex(curIndex === length - 1 ? 0 : curIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(curIndex === 0 ? length - 1 : curIndex - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);    
    })

    return (
        <div className="Slider">
            <div className="Slider_ctn">
                {props.images.map((ImgSrc, Index) => (
                    <img className={curIndex === Index ? "active" : "inactive"} id={"img" + Index} key={Index} src={ImgSrc} alt={ImgSrc}>

                    </img>
                ))}
            </div>
            <div className="Slider_overlay">
                <div className="left" onClick={nextSlide}><p>&#60;</p></div>
                <div className="right" onClick={prevSlide}><p>&#62;</p></div>
            </div>
        </div>
    )
}

export default Slider;