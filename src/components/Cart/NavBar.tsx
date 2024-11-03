interface Props {
  cartCount: number;
}

const NavBar = ({ cartCount }: Props) => {
  return <div>NavBar: {cartCount}</div>;
};

export default NavBar;
