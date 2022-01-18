import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MySlider.css";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
    <button onClick={onClick} className="slick-arrow slick-prev arrow-button-image" style={{position:'absolute'}}>
        <div>
            <span>
                <img alt="Slick Arrow" height="100px" width="100px" src="https://www.voot.com/images/carousel-arrow.svg"/>
            </span>
        </div>
    </button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <button onClick={onClick} className="slick-arrow slick-next arrow-button-image"  style={{position:'absolute'}}>
            <div>
                <span>
                    <img style={{position:'absolute', right:'70px'}} alt="Slick Arrow" height="100px" width="100px" src="https://www.voot.com/images/carousel-arrow.svg"/>
                </span>
            </div>
        </button>
    );
}
export default function MySlider({data}) {
    const settings = {
        className:"center",
        centerMode:true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
        
        
    };
    return (
        <div>
        <h2 className="text-center">Center Mode</h2>
        <Slider {...settings}>
            {
                data.length > 0 &&
                data.map((val, id) => {
                    return(
                        <div key={id} style={{position:'relative'}}>
                            <img src={`${val.imgURL}`} alt={val.mediaName} width="580px"/>
                        </div>
                    )
                })
            }
          
         
        </Slider>
      </div>
    )
}
