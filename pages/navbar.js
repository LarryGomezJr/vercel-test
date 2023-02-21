import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link className="font-bold text-xl text-white" href="/">
                Logo
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
