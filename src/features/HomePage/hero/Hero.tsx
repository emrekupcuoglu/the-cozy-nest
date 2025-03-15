import { supabase } from "@/lib/supabase/supabase";
import HeroGallery from "./HeroGallery";
import HeroIcons from "./HeroIcons";
import HeroText from "./HeroText";

async function Hero() {
  return (
    <div className="flex flex-col">
      {/* set the margins background color */}
      <div className="bg-background-hero">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 py-10">
            <div className="bg-background-hero flex justify-center gap-8 py-10 text-white">
              <HeroText className="basis-1/2" />
              <HeroGallery className="basis-1/2" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mx-auto max-w-7xl">
          <HeroIcons />
        </div>
      </div>
    </div>
  );
}

export default Hero;
