import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import me from "../../img/me.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
	// Transition
	const transition = { duration: 2, type: "spring" };

	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="Intro" id="Intro">
			{/* left name side */}
			<div className="i-left">
				<div className="i-name">
					{/* yahan change hy darkmode ka */}
					<span style={{ color: darkMode ? "white" : "" }}>Hey! I Am </span>
					<TypeAnimation
						sequence={[
						"Biplap Neupane.", 
						1000, 
						"Full Stack Developer.",
						2000, // Pause again
						]}
						cursor={true}
						repeat={Infinity}
						style={{ display: "inline-block",color:"#fca61f" }}
					/>
					<span style={{ fontSize: "1rem", color: darkMode ? "white" : "" }}>
						Frontend Developer with 6 months experience in web designing,
						development and IT support and services producting the quality work.
					</span>
				</div>
				<Link to="contact" smooth={true} spy={true}>
					<button className="button i-button">Hire me</button>
				</Link>

				{/* social icons */}
				<div className="i-icons">
					<a
						href="https://github.com/biplap12"
						rel="noreferrer"
						target={"_blank"}
					>
						{" "}
						<img src={Github} alt="" />
					</a>
					<a
						href="https://www.linkedin.com/in/biplap12/"
						rel="noreferrer"
						target={"_blank"}
					>
						<img src={LinkedIn} alt="" />
					</a>
					<a
						href="https://www.instagram.com/biplap11"
						rel="noreferrer"
						target={"_blank"}
					>
						<img src={Instagram} alt="" />
					</a>
				</div>
			</div>
			{/* right image side */}
			<div className="i-right">
				<img src={Vector1} alt="" />
				<img src={Vector2} alt="" />
				<img
					className="phoptp"
					src={me}
					alt=""
					oncontextmenu="return false"
					height={"380rem"}
					width={"250rem"}
				/>
				{/* animation */}
				<motion.img
					initial={{ left: "-36%" }}
					whileInView={{ left: "-24%" }}
					transition={transition}
					src={glassesimoji}
					alt=""
					className="glassemoji"
				/>

				<motion.div
					initial={{ top: "-4%", left: "74%" }}
					whileInView={{ left: "68%" }}
					transition={transition}
					className="floating-div"
				>
					<FloatinDiv img={crown} text1="Web" text2="Developer" />
				</motion.div>

				{/* animation */}
				<motion.div
					initial={{ left: "6rem", top: "18rem" }}
					whileInView={{ left: "65%" }}
					transition={transition}
					className="floating-div itsupport"
				>
					<FloatinDiv img={thumbup} text1="IT Support" text2="& Services" />
				</motion.div>

				<div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
				<div
					className="blur"
					style={{
						background: "#C1F5FF",
						top: "17rem",
						width: "21rem",
						height: "11rem",
						left: "-9rem",
					}}
				></div>
			</div>
		</div>
	);
};

export default Intro;
