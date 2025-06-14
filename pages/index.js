import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>SEROUNI - Where Real Stories Heal Real People</title>
        <meta name="description" content="Connect through authentic emotional experiences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Where Real Stories</span>
            <span className="block text-accent-teal">Heal Real People</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Share your story. Find your tribe. Heal together. A safe space for authentic emotional connections and support.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/story" className="btn-primary inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium">
                Share Your Story
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="/sos" className="btn-primary inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium">
                Need Support Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900">Share Anonymously</h3>
              <p className="mt-2 text-base text-gray-500">
                Express yourself freely in a safe, judgment-free environment.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900">Find Your Tribe</h3>
              <p className="mt-2 text-base text-gray-500">
                Connect with others who understand your journey through AI-powered matching.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900">Instant Support</h3>
              <p className="mt-2 text-base text-gray-500">
                Get immediate emotional support from trained listeners when you need it most.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 