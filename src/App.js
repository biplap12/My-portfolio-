import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
// import MyFiles from "./components/MyFiles/myFiles";
import Portfolio from "./components/Portfolio/Portfolio";
//import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import { Toaster } from "react-hot-toast";
import BackToTop from "./components/backToTop/backToTop";

function App() {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	
	return (
		<div
			className="App"
			style={{
				background: darkMode ? "black" : "",
				color: darkMode ? "white" : "",
			}}
		>
			<Navbar />
			<Intro />
			<Services />
			<Works />
			<Experience />
			{/* <MyFiles /> */}
			<Portfolio />
			{/* <Testimonial /> */}
			<Contact />
			<Footer />
			<BackToTop	/>
			<Toaster position="top-right" />
		</div>
	);
}

export default App;
