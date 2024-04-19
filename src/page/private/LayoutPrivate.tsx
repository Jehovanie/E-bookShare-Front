import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LayoutPrivate = () => {
	const navigate = useNavigate();
	const url = useLocation();
	console.log(url);
	useEffect(() => {
		if (url.pathname == "/utilisateur") {
			console.log("eto");
			navigate("/utilisateur/profil");
		}
	}, []);
	return (
		<>
			<Outlet />
		</>
	);
};

export default LayoutPrivate;
