import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { Heart } from "lucide-react";

export default function FavoriteSignInButton() {
	return (
		<Button
			asChild
			variant={"outline"}
			size={"icon"}
			className='cursor-pointer p-[7px] text-white hover:text-[#ed1825] transition-all duration-300 hover:scale-110'>
			<SignInButton mode='modal'>
				<Heart />
			</SignInButton>
		</Button>
	);
}
