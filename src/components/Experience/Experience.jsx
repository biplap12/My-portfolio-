import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="experience" id="experience">
			<div className="achievement">
				{/* darkMode */}
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					1+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>Years </span>
				<span>Experience</span>
			</div>
			<div className="achievement">
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					20+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>completed </span>
				<span>Projects</span>
			</div>
			<div className="achievement">
				<div
					className="circle"
					style={{ color: darkMode ? "var(--orange)" : "" }}
				>
					3+
				</div>
				<span style={{ color: darkMode ? "white" : "" }}>companies </span>
				<span>Work</span>
			</div>
		</div>
	);
};

export default Experience;
