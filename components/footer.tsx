import Link from "next/link";
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="w-full relative z-10 bg-white shadow border-t  flex justify-center"
    >
      <h2 id="footer-heading" className="sr-only">
        Flex
      </h2>

      <section className="w-full flex items-center justify-center bg-white shadow-section px-4 py-30px lg:px-35px ">
        <div className="text-gray-900">
          <span>Copyright &copy; {year} </span>
          <Link
            href="/"
            className="font-semibold transition-colors duration-200 ease-in-out hover:text-red-700"
          >
            Flex
          </Link>
          <span> All rights reserved</span>
        </div>
      </section>
    </footer>
  );
}
