import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
interface Props {
	totalPages: number;
	currentPage: number;

	baseURL: string;
}
export default function PaginationContainer({
	totalPages,
	currentPage,
	baseURL,
}: Props) {
	if (totalPages == 1) return null;

	const renderPageNumbers = () => {
		const pages = [];

		if (currentPage > 3) {
			pages.push(
				<PaginationItem key={1}>
					<PaginationLink
						href={`/${baseURL}?page=1`}
						className='text-muted-foreground text-xs sm:text-sm md:text-base font-bold hover:text-primary px-1 sm:px-2 md:px-3 h-7 sm:h-8 md:h-9 min-w-[28px] sm:min-w-[36px] md:min-w-[44px] flex items-center justify-center '
						isActive={currentPage === 1}>
						1
					</PaginationLink>
				</PaginationItem>,
			);

			if (currentPage > 4) {
				pages.push(
					<PaginationItem key='ellipsis-start'>
						<PaginationEllipsis className='text-primary text-xs sm:text-sm ' />
					</PaginationItem>,
				);
			}
		}

		const startPage = Math.max(1, currentPage - 1); // Show 1 previous on small+
		const endPage = Math.min(totalPages, currentPage + 1); // Show 1 next on mobile

		// Adjust for larger screens via CSS classes
		for (let i = startPage; i <= endPage; i++) {
			pages.push(
				<PaginationItem key={i}>
					<PaginationLink
						href={`/${baseURL}?page=${i}`}
						className={`text-muted-foreground text-xs sm:text-sm md:text-base font-bold hover:text-primary px-1 sm:px-2 md:px-3 h-7 sm:h-8 md:h-9 min-w-[28px] sm:min-w-[36px] md:min-w-[44px] flex items-center justify-center  ${currentPage === i ? "bg-primary/20 hover:bg-primary/10" : ""}`}
						isActive={currentPage === i}>
						{i}
					</PaginationLink>
				</PaginationItem>,
			);
		}

		// Add extra pages for larger screens (hidden on mobile)
		if (endPage < Math.min(totalPages, currentPage + 2)) {
			for (
				let i = endPage + 1;
				i <= Math.min(totalPages, currentPage + 2);
				i++
			) {
				pages.push(
					<PaginationItem key={i} className='hidden sm:flex '>
						<PaginationLink
							href={`/${baseURL}?page=${i}`}
							className='text-muted-foreground text-xs sm:text-sm md:text-base font-bold hover:text-primary px-1 sm:px-2 md:px-3 h-7 sm:h-8 md:h-9 min-w-[28px] sm:min-w-[36px] md:min-w-[44px] flex items-center justify-center '
							isActive={currentPage === i}>
							{i}
						</PaginationLink>
					</PaginationItem>,
				);
			}
		}

		// Add even more pages for medium+ screens
		if (endPage < Math.min(totalPages, currentPage + 4)) {
			for (
				let i = Math.min(totalPages, currentPage + 3);
				i <= Math.min(totalPages, currentPage + 4);
				i++
			) {
				pages.push(
					<PaginationItem key={i} className='hidden md:flex'>
						<PaginationLink
							href={`/${baseURL}?page=${i}`}
							className='text-muted-foreground text-xs sm:text-sm md:text-base font-bold hover:text-primary px-1 sm:px-2 md:px-3 h-7 sm:h-8 md:h-9 min-w-[28px] sm:min-w-[36px] md:min-w-[44px] flex items-center justify-center'
							isActive={currentPage === i}>
							{i}
						</PaginationLink>
					</PaginationItem>,
				);
			}
		}

		// Show last page (hidden on very small screens if it would overflow)
		if (currentPage < totalPages - 2) {
			if (currentPage < totalPages - 3) {
				pages.push(
					<PaginationItem key='ellipsis-end' className='hidden sm:flex'>
						<PaginationEllipsis className='text-primary text-xs sm:text-sm' />
					</PaginationItem>,
				);
			}

			// Show last page (hidden on mobile if too many pages)
			pages.push(
				<PaginationItem key={totalPages} className='hidden sm:flex'>
					<PaginationLink
						href={`/${baseURL}?page=${totalPages}`}
						className='text-muted-foreground text-xs sm:text-sm md:text-base font-bold hover:text-primary px-1 sm:px-2 md:px-3 h-7 sm:h-8 md:h-9 min-w-[28px] sm:min-w-[36px] md:min-w-[44px] flex items-center justify-center'
						isActive={currentPage === totalPages}>
						{totalPages}
					</PaginationLink>
				</PaginationItem>,
			);
		}

		return pages;
	};

	return (
		<div className='w-full max-w-full overflow-hidden'>
			<Pagination>
				<PaginationContent className='w-full justify-center px-0.5 sm:px-1 md:px-2 flex-nowrap gap-0.5 md:gap-1 text-xs sm:text-sm'>
					{currentPage > 1 && (
						<PaginationItem className='flex-shrink-0'>
							<PaginationPrevious
								className='text-primary hover:bg-primary/10 px-2 sm:px-3 md:px-4 text-xs sm:text-sm h-7 sm:h-8 md:h-9 min-w-0'
								href={`/${baseURL}?page=${currentPage - 1}`}
							/>
						</PaginationItem>
					)}

					<div className='flex items-center gap-0.5 md:gap-1 overflow-hidden'>
						{renderPageNumbers()}
					</div>

					{currentPage < totalPages && (
						<PaginationItem className='flex-shrink-0'>
							<PaginationNext
								className='text-primary hover:bg-primary/10 px-2 sm:px-3 md:px-4 text-xs sm:text-sm h-7 sm:h-8 md:h-9 min-w-0'
								href={`/${baseURL}?page=${currentPage + 1}`}
							/>
						</PaginationItem>
					)}
				</PaginationContent>
			</Pagination>
		</div>
	);
}
