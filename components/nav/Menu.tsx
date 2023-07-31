import Link from "next/link";
import { usePathname } from "next/navigation";

interface menuStyle {
  style: string;
  ulStyle?: string;
}

const Menu = ({ style, ulStyle }: menuStyle) => {
  const path = usePathname();
  return (
    <nav className={style}>
      <ul
        className={`list-none menu menu-compact dropdown-content bg-white lg:bg-transparent  ${ulStyle} bg-base-100 rounded-box w-52 flex flex-col  md:w-auto md:flex-row text-dark_ items-center gap-x-3 text-sm font-semibold`}
      >
        <Link href={"/"} className="text-left">
          <li
            className={`${
              path === "/" ? "menuItemActiveStyle" : "menuItemStyle"
            }`}
          >
            Shop
          </li>
        </Link>
        <li className="menuItemDisableStyle">Collective</li>
        <li className="menuItemDisableStyle">Designers</li>
        <Link href={"/contact-us"} className="text-left">
          <li
            className={`${
              path === "/contact-us" ? "menuItemActiveStyle" : "menuItemStyle"
            }`}
          >
            Contact
          </li>
        </Link>
        <Link href={"/about-us"} className="text-left">
          <li
            className={`${
              path === "/about-us" ? "menuItemActiveStyle" : "menuItemStyle"
            }`}
          >
            About
          </li>
        </Link>{" "}
      </ul>
    </nav>
  );
};

export default Menu;


