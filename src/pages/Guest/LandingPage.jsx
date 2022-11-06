import React from "react";
import ContactUs from "../../components/Guest/ContactUs";
import Footer from "../../components/Guest/Footer";
import Hero from "../../components/Guest/Hero";
import Navbar from "../../components/Guest/Navbar";
import Service from "../../components/Guest/Service";
import ToTop from "../../components/General/ToTop";

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
				<section id="contact">
					<ContactUs />
				</section>
			</main>
			<Footer />
			<ToTop />
		</>
	);
};

export default LandingPage;
