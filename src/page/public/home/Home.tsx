import Navbar from "../../../components/navbar/Navbar";

import image from "assets/image/home_lib_2.avif";

const Home = () => {
	return (
		<div className="w-screen h-screen overflow-hidden">
			<div className="w-full h-[20%]">
				<Navbar />
			</div>
			<div className="flex flex-col w-full h-[80%] items-center bg-white rounded-lg shadow md:flex-row ">
				<div className="flex flex-col  w-3/5 h-full justify-between p-4 leading-normal">
					<div className="w-full h-full flex justify-center items-center">
						<div className="w-2/3 h-2/3 block">
							<div className="flex flex-col justify-between p-4 leading-normal">
								<h5 className="mb-5 text-md font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl dark:text-white">
									<span className="underline underline-offset-3 decoration-8 decoration-red-500">
										Bie
									</span>
									nvenue sur <br /> E-Book'Share
								</h5>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									Bienvenue dans notre bibliothèque en ligne ! Nous sommes ravis de vous accueillir
									parmi nous. N'hésitez pas à explorer notre collection diversifiée de livres et à
									découvrir de nouvelles histoires captivantes. Bonne lecture !
								</p>
								<a
									href="/inscription"
									type="button"
									className="text-white w-[250px] bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
									Dévenir membre avec nous!?
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/5 h-full flex justify-center items-center">
					<img className="object-cover w-56 h-64" src={image} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Home;
