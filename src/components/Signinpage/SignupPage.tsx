'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SignupComponent from '@/components/Signup';

export default function SignupPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      router.replace('/permanent?page=1');
    }
  }, [router]);

  return <SignupComponent />;
}