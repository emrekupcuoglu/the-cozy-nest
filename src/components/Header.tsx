import Logo from "./Logo";
import Navigation from "./Navigation";
import NavigationCart from "./NavigationCart";

function Header() {
  return (
    <header>
      <div className="bg-background-hero mx-auto flex max-w-7xl items-center justify-between py-10 text-white">
        <Logo />
        <Navigation />
        <NavigationCart />
      </div>
    </header>
  );
}

export default Header;
