import Link from "next/link";

interface menuStyle {
  style: string;
  ulStyle?: string;
}
const Menu = ({ style, ulStyle }: menuStyle) => {
  return (
    <nav className={style}>
      <ul
        className={`list-none menu menu-compact dropdown-content bg-white lg:bg-transparent  ${ulStyle} bg-base-100 rounded-box w-52 flex flex-col  md:w-auto md:flex-row text-dark_ items-center gap-x-3 text-sm font-semibold`}
      >
        <Link href={"/home"}>
          <li className="menuItemStyle">Shop</li>
        </Link>
        <li className="menuItemStyle">Collective</li>
        <li className="menuItemStyle">Designers</li>
        <Link href={"/about-us"}>
          <li className="menuItemStyle">About</li>
        </Link>
        <li className="menuItemStyle">Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
