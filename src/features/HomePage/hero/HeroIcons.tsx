import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import HeroIcon from "./HeroIcon";

function HeroIcons() {
  return (
    <div className="flex justify-between pt-6">
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
