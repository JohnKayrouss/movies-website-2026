"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface GlobalErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error("Global application error:", error);
	}, [error]);

	return (
		<html>
			<body>
				<div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center px-4'>
					<div className='text-center space-y-12 max-w-4xl mx-auto'>
						{/* Friendly Icon */}
						<div className='relative'>
							<div className='text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 animate-pulse'>
								🤔
							</div>
							<div className='absolute -top-4 -right-4'>
								<RefreshCw className='w-20 h-20 text-orange-500 animate-spin' />
							</div>
						</div>

						{/* Friendly Message */}
						<div className='space-y-6'>
							<h1 className='text-6xl font-bold text-white'>
								We&apos;re Having a Moment
							</h1>
							<p className='text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
								Something unexpected happened and we need to restart the app.
								Don&apos;t worry - your data is safe and we&apos;ll be back up
								in no time!
							</p>
						</div>

						{/* Action Buttons */}
						<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
							<Button
								onClick={reset}
								size='lg'
								className='bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-4 rounded-xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'>
								<RefreshCw className='w-6 h-6 mr-3' />
								Restart App
							</Button>

							<Button
								onClick={() => (window.location.href = "/")}
								variant='outline'
								size='lg'
								className='border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-12 py-4 rounded-xl text-xl font-semibold transition-all duration-300 shadow-lg'>
								Go to Homepage
							</Button>
						</div>

						{/* Help Section */}
						<div className='pt-12 border-t border-gray-700'>
							<p className='text-xl text-gray-400 mb-6'>
								Still having trouble? Try these options:
							</p>
							<div className='flex flex-wrap justify-center gap-6 text-lg'>
								<button
									onClick={() => window.location.reload()}
									className='text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium'>
									🔄 Refresh Page
								</button>
								<span className='text-gray-600 text-xl'>•</span>
								<button
									onClick={() => {
										localStorage.clear();
										sessionStorage.clear();
										window.location.href = "/";
									}}
									className='text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium'>
									🧹 Clear & Restart
								</button>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className='absolute top-10 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse'></div>
						<div className='absolute bottom-10 right-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000'></div>
					</div>
				</div>
			</body>
		</html>
	);
}
