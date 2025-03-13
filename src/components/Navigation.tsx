import Navlink from "./Navlink";

function Navigation() {
  return (
    <div className="flex gap-16">
      <Navlink href="/">Home</Navlink>
      <Navlink href="/">Products</Navlink>
      <Navlink href="/">Categories</Navlink>
      <Navlink href="/">About Us</Navlink>
      <Navlink href="/">Contact Us</Navlink>
      <Navlink href="/">Blog</Navlink>
    </div>
  );
}

export default Navigation;
