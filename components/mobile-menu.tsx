import Link from "next/link";

const primaryMenus = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "Services",
    path: "",
  },
  {
    label: "About",
    path: "",
  },
];

const styles = {
  link: `  
    block p-1 font-medium text-gray-500
    hover:text-primary-600
    transition
    duration-500
    ease-in-out`,
};

const MobileMenu = () => (
  <div
    id="primaryMenu"
    className={`w-full flex md:hidden flex-wrap flex-row space-x-2 p-8  `}
  >
    {primaryMenus.map((menu, idx) => (
      <Link key={idx} href={`/${menu.path}`} className={styles.link}>
        {menu.label}
      </Link>
    ))}
  </div>
);

export default MobileMenu;
