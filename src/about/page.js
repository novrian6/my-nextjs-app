import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Next.js Website!</h1>
      <p>This is the home page.</p>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}