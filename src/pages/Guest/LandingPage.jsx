import React from "react";
import Hero from "../../components/Guest/Hero";
import Navbar from "../../components/Guest/Navbar";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<section id="hero">
					<Hero />
				</section>
			</main>
		</>
	);
};

export default LandingPage;
