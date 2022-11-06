import React from "react";
import ContactUs from "../../components/Guest/ContactUs";
import Footer from "../../components/Guest/Footer";
import Hero from "../../components/Guest/Hero";
import Navbar from "../../components/Guest/Navbar";
import Service from "../../components/Guest/Service";
import ToTop from "../../components/General/ToTop";
import { Helmet } from "react-helmet";

const LandingPage = () => {
	return (
		<>
			<Helmet>
				<title>eRekap - Landing Page</title>
				<meta name="description" content="Melakukan rekap nilai" />
			</Helmet>
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
