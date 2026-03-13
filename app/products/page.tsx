import Navbar from '@/components/Navbar';
import Products from '@/components/Products';

export const metadata = {
  title: 'Products | IronCore Fitness',
  description: 'Browse our premium commercial-grade gym equipment.',
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '5rem' }}>
        <Products />
      </div>
    </main>
  );
}
