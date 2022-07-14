import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../../static/01.png";
import Img2 from "../../static/02.png";
import Img3 from "../../static/03.png";
import Img4 from "../../static/04.png";
import Img5 from "../../static/05.png";
import Img6 from "../../static/06.png";
import Img7 from "../../static/07.png";
import Img8 from "../../static/08.png";
import Img9 from "../../static/09.png";
import Img10 from "../../static/10.png";
import Img11 from "../../static/11.png";
import Img12 from "../../static/12.png";
import Img13 from "../../static/13.png";
import Img14 from "../../static/14.png";
import Img15 from "../../static/15.png";

export default class AutoSlider extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			speed: 2000,
			pauseOnHover: false,
			autoplaySpeed: 2000,
			cssEase: "linear",
		};
		return (
			<div>
				<Slider {...settings}>
					<div>
						<Image src={Img1} alt="Img1" />
					</div>
					<div>
						<Image src={Img2} alt="Img2" />
					</div>
					<div>
						<Image src={Img3} alt="Img3" />
					</div>
					<div>
						<Image src={Img4} alt="Img4" />
					</div>
					<div>
						<Image src={Img5} alt="Img5" />
					</div>
					<div>
						<Image src={Img6} alt="Img6" />
					</div>
					<div>
						<Image src={Img7} alt="Img7" />
					</div>
					<div>
						<Image src={Img8} alt="Img8" />
					</div>
					<div>
						<Image src={Img9} alt="Img9" />
					</div>
					<div>
						<Image src={Img10} alt="Img10" />
					</div>
					<div>
						<Image src={Img11} alt="Img11" />
					</div>
					<div>
						<Image src={Img12} alt="Img12" />
					</div>
					<div>
						<Image src={Img13} alt="Img13" />
					</div>
					<div>
						<Image src={Img14} alt="Img14" />
					</div>
					<div>
						<Image src={Img15} alt="Img15" />
					</div>
				</Slider>
			</div>
		);
	}
}
