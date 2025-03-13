import Image from "next/image";
import CollectionCard from "./CollectionCard";
import tableImg from "@/../public/round-table.png";
import chairImg from "@/../public/chair.png";
import lampImg from "@/../public/lamp.png";

function NewCollection() {
  return (
    <div className="grid grid-cols-7 gap-8">
      <CollectionCard gridStyle="col-span-4">
        <div className="flex items-center justify-around">
          <div className="">
            <span className="rounded-full bg-white px-3 py-2 font-bold uppercase">
              NEW COLLECTION
            </span>
            <h1 className="mt-4">
              <strong>Center Table</strong>
            </h1>
            <p>Square table</p>
            <p>Round table</p>
            <p>Wooden table</p>
            <p>Glass table</p>
          </div>
          <div>
            <Image
              className="max-h-40 max-w-44 object-contain object-top"
              src={tableImg}
              alt="Round table"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
            />
          </div>
        </div>
      </CollectionCard>
      <CollectionCard gridStyle="col-span-3 col-start-5 row-span-2">
        <div className="flex flex-col">
          <div className="">
            <span className="rounded-full bg-white px-3 py-2 font-bold uppercase">
              NEW COLLECTION
            </span>
            <h1 className="mt-4">
              <strong>Elegant Chairs</strong>
            </h1>
            <p>Arm chair</p>
            <p>Cafe chair</p>
            <p>L chair</p>
            <p>Office chair</p>
          </div>
          <div className="pl-8">
            <Image
              className="max-h-40 max-w-44 object-contain object-top"
              src={chairImg}
              alt="Round table"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
            />
          </div>
        </div>
      </CollectionCard>
      <CollectionCard gridStyle="col-span-2 h-full">
        <div className="flex h-full items-center">
          <div className="grow">
            <span className="rounded-full bg-white px-3 py-2 text-xs font-bold uppercase">
              NEW COLLECTION
            </span>
            <h1 className="mt-4">
              <strong>Lamps</strong>
            </h1>
            <p>Tripod lamps</p>
            <p>Study lamps</p>
            <p>Table lamps</p>
          </div>
          <div className="">
            <Image
              className="max-h-24 max-w-24 object-contain"
              src={lampImg}
              alt="Round table"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
            />
          </div>
        </div>
      </CollectionCard>
      <CollectionCard
        className="bg-background-hero items-center justify-center"
        gridStyle="col-span-2 h-full"
      >
        <div className="flex h-full flex-col items-center justify-center text-white">
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
