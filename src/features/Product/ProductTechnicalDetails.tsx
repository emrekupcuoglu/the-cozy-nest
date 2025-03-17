import FeatureTableItem from "./FeatureTableItem";

function ProductTechnicalDetails() {
  return (
    <div className="flex basis-1/2 justify-center gap-16">
      <div className="w-1/2">
        <table className="w-full">
          <thead className="bg-background-hero [&_td]:p-4 [&_th]:p-4 [&_th]:first:rounded-tl-2xl [&_th]:last:rounded-tr-2xl">
            <tr className="rounded-2xl">
              <th>Features</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody className="">
            {/* <tbody className="[&>tr:nth-child(even)>*]:[&>div]:bg-card-grey [&>tr>td>div]:text-center [&>tr>th>div]:text-center [&_div]:mt-4 [&_div]:border [&_div]:p-4 *:last:[&_div]:rounded-bl-2xl *:last:[&_div]:rounded-br-2xl"> */}

            <FeatureTableItem index={0} title="Brand" value="Leather CO." />
            <FeatureTableItem index={1} title="Color" value="Black" />

            <FeatureTableItem
              index={2}
              title="Dimensions"
              value="24cm X 24cm X 70cm"
            />
            <FeatureTableItem index={3} title="Size" value="N/A" />
            <FeatureTableItem index={4} title="Material" value="Leather" />
            <FeatureTableItem
              roundBottom
              index={5}
              title="Material"
              value="Leather"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTechnicalDetails;
