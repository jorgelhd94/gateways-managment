import { useRouter } from 'next/router';
import { signOut, auth } from '../src/includes/firebase';
import Link from 'next/link';
import Dashboard from '../src/components/Layout/Dashboard/Dashboard';

export default function Home() {
  const router = useRouter();
  const logout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <Dashboard>

    </Dashboard>
  );
}
