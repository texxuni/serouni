import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-accent-teal">
              SEROUNI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-accent-teal px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/story" className="text-gray-700 hover:text-accent-teal px-3 py-2 rounded-md text-sm font-medium">
                Share Story
              </Link>
              <Link href="/sos" className="text-gray-700 hover:text-accent-teal px-3 py-2 rounded-md text-sm font-medium">
                SOS Support
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 