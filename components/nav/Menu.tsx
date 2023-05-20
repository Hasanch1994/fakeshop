interface menuStyle {
  style: string;
  ulStyle?: string;
}
const Menu = ({ style, ulStyle }: menuStyle) => {
  return (
    <nav className={style}>
      <ul
        className={`list-none menu menu-compact dropdown-content  ${ulStyle} bg-base-100 rounded-box w-52 flex flex-col  md:w-auto md:flex-row text-dark_ items-center gap-x-3 text-sm font-semibold`}
      >
        <li className="menuItemStyle">Shop</li>
        <li className="menuItemStyle">Collective</li>
        <li className="menuItemStyle">Designers</li>
        <li className="menuItemStyle">About</li>
        <li className="menuItemStyle">Contact</li>
      </ul>
    </nav>
  );
};

export default Menu;
