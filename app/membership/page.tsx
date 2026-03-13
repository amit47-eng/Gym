import Navbar from '@/components/Navbar';
import Membership from '@/components/Membership';

export const metadata = {
  title: 'Membership | IronCore Fitness',
  description: 'Choose a premium gym membership plan tailored to your fitness goals.',
};

export default function MembershipPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '5rem' }}>
        <Membership />
      </div>
    </main>
  );
}
