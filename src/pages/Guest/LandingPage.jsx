import React from "react";
import Hero from "../../components/Guest/Hero";
import Navbar from "../../components/Guest/Navbar";
import Service from "../../components/Guest/Service";

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<section id="hero">
					<Hero />
				</section>
				<section id="service">
					<Service />
				</section>
			</main>
		</>
	);
};

export default LandingPage;
