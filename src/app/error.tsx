'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaArrowRight } from 'react-icons/fa';
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center px-4">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="bg-gray-800/40 border border-red-500/50 rounded-xl p-8 max-w-lg">
				<div className="flex justify-center mb-4">
					<FaExclamationTriangle className="h-12 w-12 text-red-500" />
				</div>
				<h2 className="text-2xl sm:text-3xl font-bold text-white">Something went wrong!</h2> <p className="mt-2 text-base sm:text-lg text-gray-400">We encountered an unexpected error. Please try again or return to the homepage.</p>
				<div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
					<button
						onClick={reset}
						className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg transition-colors">
						Try again
					</button>
					<Link href="/">
						<button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg transition-colors inline-flex items-center space-x-2">
							<span>Go Home</span> <FaArrowRight className="h-5 w-5" />
						</button>
					</Link>
				</div>
			</motion.div>
		</div>
	);
}
