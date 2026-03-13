import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import KnowMore from '@/components/KnowMore';
import Trainers from '@/components/Trainers';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <KnowMore />
      <Trainers />
    </main>
  );
}

