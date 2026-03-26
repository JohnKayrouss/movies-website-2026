import Providers from "./Providers";
import { ClerkProvider } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const roboto = Roboto({
	weight: "400",
	subsets: ["latin"],
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en' className='dark' suppressHydrationWarning>
				<body
					className={`${roboto.className} scrollbar-hidden min-h-screen flex flex-col`}
					suppressHydrationWarning>
					<Providers>
						<Navbar />
						<main className='flex-1 bg-black text-white '>{children}</main>
						<Footer />
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
