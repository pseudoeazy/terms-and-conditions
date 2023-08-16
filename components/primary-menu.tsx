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

const PrimaryMenu = () => (
  <div
    id="primaryMenu"
    className={`hidden md:flex flex-wrap flex-col md:flex-row md:space-x-8 p-8  `}
  >
    {primaryMenus.map((menu, idx) => (
      <Link key={idx} href={`/${menu.path}`} className={styles.link}>
        {menu.label}
      </Link>
    ))}
  </div>
);

export default PrimaryMenu;
