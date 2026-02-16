'use client';

import { useState } from 'react';
import CandidateDashboard from '@/components/Dashboard/Candidate/Dashboardlayout';

export default function MyComponent() {
  const [state, setState] = useState(null);

  return (
    <>
      <CandidateDashboard children={undefined} title={''} />
    </>
  );
}
