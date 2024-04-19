const Signin = () => {
	return (
		<div className="flex flex-col w-screen h-screen items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<div className="w-3/5 h-full">
				<img
					className="object-cover w-full h-full"
					src="https://images.unsplash.com/photo-1601469090980-fc95e8d95544?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
			</div>
			<div className="flex flex-col  w-2/5 h-full justify-between p-4 leading-normal bg-gradient-to-br from-slate-50 to-slate-100">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-1/2 h-1/2 block">
						<form className="max-w-sm mx-auto">
							<h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
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
							<div className="flex items-start mb-5">
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
								className="text-black bg-gradient-to-br from-slate-100 to-slate-500 outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
							>
								Connexion
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signin;
