import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Trainers from '@/components/Trainers';
import KnowMore from '@/components/KnowMore';

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


