'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SignupComponent from '@/components/Signup';

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      router.replace('/my-account/candidate/profile');
    }
  }, [router]);

  return (
    <main>
      <SignupComponent />
    </main>
  );
}