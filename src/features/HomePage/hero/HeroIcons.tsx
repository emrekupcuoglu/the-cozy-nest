import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import HeroIcon from "./HeroIcon";

function HeroIcons() {
  return (
    <div className="flex justify-between pb-16 pt-6 max-xl:pl-24 max-lg:pl-16 max-md:pl-8 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-8 max-sm:pl-4 max-sm:text-sm">
      <HeroIcon
        icon={<LiaShippingFastSolid />}
        iconText="Fast & Free Shipping"
      />
      <HeroIcon icon={<FiShoppingBag />} iconText="Easy to Shop" />
      <HeroIcon icon={<HiOutlineSupport />} iconText="24/7 Support" />
      <HeroIcon icon={<TbTruckReturn />} iconText="Hassle Free Returns" />
    </div>
  );
}

export default HeroIcons;
