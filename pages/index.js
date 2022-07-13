import React, { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

//Components
import Accordion from "../components/FAQ/FAQ";

// Images
import GetHelpIcon from "../static/Question-icon.png";
import Logo from "../static/main-logo.png";
import Img1 from "../static/01.png";
import Img2 from "../static/02.png";
import Img3 from "../static/03.png";
import Img4 from "../static/04.png";
import Img5 from "../static/05.png";
import Img6 from "../static/06.png";
import Img7 from "../static/07.png";
import Img8 from "../static/08.png";
import Img9 from "../static/09.png";
import Img10 from "../static/10.png";
import Img11 from "../static/11.png";
import Img12 from "../static/12.png";
import Img13 from "../static/13.png";
import Img14 from "../static/14.png";
import Img15 from "../static/15.png";
import CloseIcon from "../static/Close-icon.png";

import Opensea from "../static/OpenSea.png";
import Twitter from "../static/Twitter.png";
import Discord from "../static/Discord.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function Home() {
	const [showModal, setShowModal] = useState(false);

	const modalRef = useRef();
	const openModal = (e) => {
		e.preventDefault();
		setShowModal((prev) => !prev);
	};
	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<div className={styles.mainContainer}>
			<Head>
				<title>Dragon Mint</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={styles.header}>
				{/* Help wrapper */}
				<div className={styles.helpWrap}>
					<div className={styles.gethelpWrap} onClick={openModal}>
						<div className={styles.icon}>
							<Image src={GetHelpIcon} alt="help" />
						</div>
						<h3>GET HELP</h3>
					</div>
				</div>
				{/* Logo wrapper  */}
				<div className={styles.siteLogoWrap}>
					<a href="/">
						<Image src={Logo} alt="Site Name" />
					</a>
				</div>
				{/* connect wallet wrapper */}
				<div className={styles.connectWalletWrap}>
					<div className={styles.helpMobIcon}>
						<div className={styles.gethelpWrap} onClick={openModal}>
							<div className={styles.icon}>
								<Image src={GetHelpIcon} alt="help" />
							</div>
							<h3>GET HELP</h3>
						</div>
					</div>
					<div className={styles.connectBtnWrap}>
						<button>CONNECT WALLET</button>
					</div>
				</div>
			</header>

			<main>
				<div className={styles.mintContainer}>
					<div className={styles.sliderContainer}>
						<Swiper
							loop={true}
							spaceBetween={30}
							slidesPerView={3}
							autoplay={{ delay: 3000, disableOnInteraction: false }}
							modules={[Autoplay]}
							breakpoints={{
								320: {
									slidesPerView: 1,
									spaceBetween: 0,
								},
								640: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 3,
									spaceBetween: 40,
								},
							}}
						>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img1} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img2} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img3} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img4} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img5} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img6} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img7} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img8} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img9} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img10} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img11} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img12} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img13} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img14} />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className={styles.imgSlide}>
									<Image src={Img15} />
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
					<div className={styles.amountpriceWrap}>
						<div className={styles.amount}>
							<h3>AMOUNT</h3>
							<div className={styles.counterWrap}>
								<div className={styles.numfield}>1</div>
								<div className={styles.Btnfield}>
									<button>-</button>
									<button>+</button>
								</div>
							</div>
						</div>
						<div className={styles.price}>
							<h3>TOTAL PRICE</h3>
							<span>0.12 ETH</span>
						</div>
					</div>
					<div className={styles.mintProgress}>
						<h3>MINTING NOW</h3>
						<div className={styles.progressWrap}>
							<div className={styles.progressBar} style={{ width: "8%" }}></div>
							<span>100/5555</span>
						</div>
					</div>
					<div className={styles.mintBtn}>
						<button>MINT</button>
					</div>
				</div>
			</main>

			<div className={styles.footerContainer}>
				<div className={styles.socialLinks}>
					<a href="/">
						<Image src={Opensea} alt="social" />
					</a>
					<a href="/">
						<Image src={Twitter} alt="social" />
					</a>
					<a href="/">
						<Image src={Discord} alt="social" />
					</a>
				</div>
			</div>
			{showModal ? (
				<div
					className={styles.getHelpContainer}
					onClick={closeModal}
					ref={modalRef}
				>
					<div className={styles.getHelpWrap}>
						<div className={styles.helpwrapHead}>
							<h2>HELP CENTER</h2>
							<div
								className={styles.closeIcon}
								onClick={() => {
									setShowModal(!showModal);
								}}
							>
								<Image src={CloseIcon} alr="close" />
							</div>
						</div>

						<div className={styles.accordionContainer}>
							<div className={styles.accordion}>
								{accordionData.map(({ title, content, id }) => (
									<Accordion key={id} title={title} content={content} />
								))}
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

const accordionData = [
	{
		id: 1,
		title: "> how to add funds to your wallet?",
		content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`,
	},
	{
		id: 2,
		title: "> how to mint an nft?",
		content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`,
	},
	{
		id: 3,
		title: "> how to buy and sell nfts?",
		content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`,
	},
];
