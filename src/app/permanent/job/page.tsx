import { RedirectType } from 'next/navigation';
import { redirect } from 'next/navigation';

export default function JobPage() {
  redirect('/', RedirectType.replace);
}