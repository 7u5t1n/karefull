import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Form from '@/components/Form';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-row gap-5 cursor-pointer">
          <Link
            href="/issuer"
            className="border-2 border-black rounded py-5 px-5 text-center cursor-pointer"
          >
            <span className="text-2xl cursor-pointer">Issuer</span>
          </Link>
          <Link
            href="/verifier"
            className="border-2 border-black rounded py-5 px-5 text-center cursor-pointer"
          >
            <span className="text-2xl">Verifier</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
