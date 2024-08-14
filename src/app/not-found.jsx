import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-purple-50 dark:bg-purple-900 flex items-center justify-center min-h-screen">
      <div className="container px-6 py-12 mx-auto text-center">
        <p className="text-sm font-medium text-red-900 dark:text-red-400">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          We can’t find that page
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Our designer got a little too creative and lost this page in the process!
        </p>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Don't worry though, everything is STILL AWESOME!
        </p>

        <div className="flex items-center justify-center mt-6 gap-x-3">
          <Link
            href={'/'}
            className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-purple-500 rounded-lg shrink-0 sm:w-auto hover:bg-purple-600 dark:hover:bg-purple-500 dark:bg-purple-600"
          >
            Take me home
          </Link>
        </div>
      </div>
    </section>
  );
}
