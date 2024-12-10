import { MasonryGrid } from '@/components/masonry-grid';
import { masonryItems } from '@/constants';

export default function Home() {
	return (
		<div className="py-12">
			<h1 className="text-center  mb-12">Home</h1>
			<div className="px-4 max-w-5xl mx-auto bg-muted py-12">
				<MasonryGrid items={masonryItems} className='bg-rose-500' />
			</div>
		</div>
	);
}
