import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

export default function Layout(props) {
	const { children } = props;
	return (
		<>
			<Header />
				<main>{children}</main>
			<Footer />
		</>
	);
}
