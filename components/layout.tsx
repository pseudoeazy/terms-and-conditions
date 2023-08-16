import Header from "./header";
import Footer from "./footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <main
    className={`relative min-h-screen  ${inter.className}`}
    style={{
      minHeight: "-webkit-fill-available",
      WebkitOverflowScrolling: "touch",
    }}
  >
    <Header />
    <div className="flex flex-col w-full h-full min-h-screen flex-grow">
      <div className="pt-90px px-3  flex-auto md:px-35px">{children}</div>
      <Footer />
    </div>
  </main>
);

export default Layout;
