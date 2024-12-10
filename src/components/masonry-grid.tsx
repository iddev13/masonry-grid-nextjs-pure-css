import { cn } from '@/lib/utils';
import { Card } from './ui/card';

export type MasonryItemsType = {
	id: number;
	label: string;
};

export type MasonryGridType = {
	items: MasonryItemsType[];
	className?: string;
};

export const MasonryGrid = ({ items, className }: MasonryGridType) => {
	return (
		<div
			className={cn(
				'gap-4 columns-2 md:columns-4 lg:columns-6 xl:columns-8',
				className
			)}
		>
			{items.map((elem) => (
				<Card
					key={elem.id}
					className="break-inside-avoid mb-1 border p-4 box-border"
				>
					{elem.label}
				</Card>
			))}
		</div>
	);
};
