import image from "./../../../../assets/image/auth_left_side.jpg";

const Signup = () => {
	return (
		<div className="flex flex-col w-screen h-screen items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<div className="w-3/5 h-full">
				<img className="object-cover w-full h-full" src={image} alt="" />
			</div>
			<div className="flex flex-col  w-2/5 h-full justify-between p-4 leading-normal bg-gradient-to-br from-slate-50 to-slate-100">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-2/3 h-2/3 block">
						<form className="max-w-sm mx-auto">
							<h1 className="mb-5 text-2xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl dark:text-white">
								<span className="underline underline-offset-3 decoration-8 decoration-slate-400">
									Ins
								</span>
								cription
							</h1>
							<div className="mb-5">
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
									Votre email
								</label>
								<input
									type="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
									placeholder="name@ebookstreaming.com"
									required
								/>
							</div>
							<div className="mb-5">
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
									Mot de passe
								</label>
								<input
									type="password"
									id="password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
									required
								/>
							</div>
							<div className="mb-5">
								<label
									htmlFor="confirm_password"
									className="block mb-2 text-sm font-medium text-gray-900 ">
									Confirme mot de passe
								</label>
								<input
									type="confirm_password"
									id="confirm_password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
									required
								/>
							</div>

							<button
								type="submit"
								className="text-black bg-gradient-to-br from-slate-100 to-slate-500 outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
								Inscription
							</button>
							<p
								id="helper-text-explanation"
								className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">
								Vous avez déja un compte? {"  "}
								<a href="/connexion" className="font-medium text-blue-600 hover:underline">
									connectez ici
								</a>
							</p>
						</form>
						<hr className="my-5" />
						<ul className="space-y-3 w-full">
							<li className="flex justify-center items-center w-full">
								<a
									href="#"
									className="w-full flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
									<svg
										aria-hidden="true"
										svg
										className="h-5"
										viewBox="0 0 75.591 75.591"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink">
										<linearGradient
											id="a"
											gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)"
											gradientUnits="userSpaceOnUse"
											x2="1">
											<stop offset="0" stop-color="#ff1b2d" />
											<stop offset=".3" stop-color="#ff1b2d" />
											<stop offset=".614" stop-color="#ff1b2d" />
											<stop offset="1" stop-color="#a70014" />
										</linearGradient>
										<linearGradient
											id="b"
											gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)"
											gradientUnits="userSpaceOnUse"
											x2="1">
											<stop offset="0" stop-color="#9c0000" />
											<stop offset=".7" stop-color="#ff4b4b" />
											<stop offset="1" stop-color="#ff4b4b" />
										</linearGradient>
										<g transform="matrix(1.3333 0 0 -1.3333 0 107.2)">
											<path
												d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z"
												fill="url(#a)"
											/>
											<path
												d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297"
												fill="url(#b)"
											/>
										</g>
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">Google Gmail</span>
								</a>
							</li>
							<li className="flex justify-center items-center w-full">
								<a
									href="#"
									className="w-full flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
									<svg
										aria-hidden="true"
										className="h-5"
										viewBox="0 0 512 512"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink">
										<defs>
											<radialGradient
												cx="0%"
												cy="50%"
												fx="0%"
												fy="50%"
												r="100%"
												id="radialGradient-1">
												<stop stop-color="#5D9DF6" offset="0%"></stop>
												<stop stop-color="#006FFF" offset="100%"></stop>
											</radialGradient>
										</defs>
										<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
											<g id="logo">
												<rect
													id="base"
													fill="url(#radialGradient-1)"
													x="0"
													y="0"
													width="512"
													height="512"
													rx="256"></rect>
												<path
													d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z"
													id="WalletConnect"
													fill="#FFFFFF"
													fill-rule="nonzero"></path>
											</g>
										</g>
									</svg>
									<span className="flex-1 ms-3 whitespace-nowrap">Facebook</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
