import Logo from "./Logo";
import Navigation from "./Navigation";
import NavigationCart from "./NavigationCart";

function Header() {
  return (
    <header className="bg-header fixed top-0 z-50 w-full backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] place-items-center items-center justify-between py-10 text-white max-lg:grid-cols-[auto_1fr] max-lg:py-6 max-md:grid-cols-[auto_1fr_auto] max-md:py-4 max-sm:py-2">
        {/* <div className="bg-background-hero mx-auto flex max-w-7xl items-center justify-between py-10 text-white max-sm:py-2"> */}
        <Logo className="max-lg:col-span-2 max-md:col-span-1 max-md:col-start-2" />

        {/* <div className="flex items-center justify-between gap-48"> */}
        <Navigation className="max-lg:pl-8 max-md:col-start-1 max-md:row-start-1" />

        <NavigationCart className="justify-self-end" />
        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;
