import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "../ui/breadcrumb";

interface props {
	breadcrumbItems: {
		label: string;
		href: string;
		currentPage: boolean;
	}[];
}

export default function Breadcrumbing({ breadcrumbItems }: props) {
	const currentPage = breadcrumbItems?.filter((item) => item.currentPage)[0];
	const breadcrumbTrain = breadcrumbItems?.filter((item) => !item.currentPage);
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink
						href='/'
						className='text-gray-400 hover:text-white transition-colors'>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className='text-gray-500' />

				{breadcrumbTrain?.map((item, index) => {
					return (
						<>
							<BreadcrumbItem key={index}>
								<BreadcrumbLink
									href={item.href}
									className='text-gray-400 hover:text-white transition-colors'>
									{item.label}
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className='text-gray-500' />
						</>
					);
				})}
				{currentPage && (
					<>
						<BreadcrumbItem>
							<BreadcrumbPage className='text-white font-medium'>
								{currentPage.label}
							</BreadcrumbPage>
						</BreadcrumbItem>
					</>
				)}
				<BreadcrumbItem>
					<BreadcrumbPage className='text-white font-medium'></BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
