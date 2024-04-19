import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/public/home/Home.tsx";
import Signin from "./page/public/auth/signin/Signin.tsx";
import Signup from "./page/public/auth/signup/Signup.tsx";
import Layout from "./page/Layout.tsx";
import LayoutPrivate from "./page/private/LayoutPrivate.tsx";
import Profil from "./page/private/user/profil/Profil.tsx";
import Setting from "./page/private/user/setting/Setting.tsx";
import Overview from "./page/private/admin/overview/Overview.tsx";
import Invitation from "./page/private/admin/invitation/Invitation.tsx";
import NotFound from "./page/public/notFound/NotFound.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "connexion", element: <Signin /> },
			{ path: "inscription", element: <Signup /> },
			{
				path: "utilisateur",
				element: <LayoutPrivate />,
				children: [
					{ path: "profil", element: <Profil /> },
					{ path: "parametre", element: <Setting /> },
				],
			},
			{
				path: "admin",
				element: <LayoutPrivate />,
				children: [
					{ index: true, element: <Overview /> },
					{ path: "invitation", element: <Invitation /> },
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
