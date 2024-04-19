import image from "assets/image/auth_left_side.jpg";

const Signin = () => {
	return (
		<div className="flex flex-col w-screen h-screen items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<div className="w-3/5 h-full bg-auth-miniature bg-no-repeat bg-cover">
				<img className="object-cover w-full h-full" src={image} alt="" />
			</div>
			<div className="flex flex-col  w-2/5 h-full justify-between p-4 leading-normal bg-gradient-to-br from-slate-50 to-slate-100">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-2/3 h-1/2 block">
						<form className="max-w-sm mx-auto">
							<h1 className="mb-5 text-2xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl dark:text-white">
								<span className="underline underline-offset-3 decoration-8 decoration-slate-400">
									Con
								</span>
								nexion
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
									Votre mots de passe
								</label>
								<input
									type="password"
									id="password"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
									required
								/>
							</div>
							<div className="flex items-start mb-2">
								<div className="flex items-center h-5">
									<input
										id="remember"
										type="checkbox"
										value=""
										className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
										required
									/>
								</div>
								<label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 ">
									Remember me
								</label>
							</div>
							<button
								type="submit"
								className="text-black bg-gradient-to-br from-slate-100 to-slate-500 outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
								Connexion
							</button>
							<p
								id="helper-text-explanation"
								className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">
								Vous n'avez pas un compte? {"  "}
								<a href="/inscription" className="font-medium text-blue-600 hover:underline">
									inscrivez ici
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
