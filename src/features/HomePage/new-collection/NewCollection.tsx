import Image from "next/image";
import CollectionCard from "./CollectionCard";
import tableImg from "@/../public/round-table.png";
import chairImg from "@/../public/chair.png";
import lampImg from "@/../public/lamp.png";

function NewCollection() {
  return (
    <div className="grid grid-cols-7 gap-8 max-md:grid-cols-1">
      <CollectionCard gridStyle="col-span-4 max-md:col-span-1">
        <div className="flex items-center justify-around">
          {/* <div className="grid grid-cols-2 items-center justify-around"> */}
          <div className="">
            <span className="rounded-full bg-white px-3 py-2 font-bold uppercase">
              NEW COLLECTION
            </span>
            <div className="pl-3 pt-4">
              <h1 className="">
                <strong>Center Table</strong>
              </h1>
              <p>Square table</p>
              <p>Round table</p>
              <p>Wooden table</p>
              <p>Glass table</p>
            </div>
          </div>
          <div>
            <Image
              className="max-h-40 max-w-44 object-contain object-top max-md:h-24 max-md:w-24"
              src={tableImg}
              alt="Round table"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
            />
          </div>
        </div>
      </CollectionCard>
      <CollectionCard gridStyle="col-span-3 col-start-5 row-span-2 max-md:col-span-1 max-md:row-span-1">
        <div className="flex flex-col items-center justify-around max-md:flex-row">
          <div className="">
            <span className="rounded-full bg-white px-3 py-2 font-bold uppercase">
              NEW COLLECTION
            </span>
            <div className="pl-3 pt-4">
              <h1 className="">
                <strong>Elegant Chairs</strong>
              </h1>
              <p>Arm chair</p>
              <p>Cafe chair</p>
              <p>L chair</p>
              <p>Office chair</p>
            </div>
          </div>
          <div className="pl-8">
            <Image
              className="max-h-80 max-w-44 object-contain object-top max-md:h-44 max-md:w-44 max-sm:h-28 max-sm:w-28"
              src={chairImg}
              alt="Round table"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
            />
          </div>
        </div>
      </CollectionCard>
      <CollectionCard gridStyle="col-span-2 h-full max-md:col-span-1">
        <div className="flex h-full flex-col items-center">
          <span className="rounded-full bg-white px-3 py-2 text-xs font-bold uppercase">
            NEW COLLECTION
          </span>
          <div className="flex justify-between gap-4">
            <div className="grow">
              <div className="text-nowrap pl-3 pt-4">
                <h1 className="">
                  <strong>Lamps</strong>
                </h1>
                <p>Tripod lamps</p>
                <p>Study lamps</p>
                <p>Table lamps</p>
              </div>
            </div>
            <div className="">
              <Image
                className="max-h-24 max-w-24 object-contain max-md:h-24 max-md:w-24"
                src={lampImg}
                alt="Round table"
                sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
              />
            </div>
          </div>
        </div>
      </CollectionCard>
      <CollectionCard
        className="bg-background-hero items-center justify-center"
        gridStyle="col-span-2 h-full max-md:col-span-1"
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 text-white">
          <span className="bg-card-action rounded-full px-3 py-2 text-center">
            GET DISCOUNT
          </span>
          <span className="text-center">20% OFF ON SELECT ITEMS</span>
        </div>
      </CollectionCard>
    </div>
  );
}

export default NewCollection;
