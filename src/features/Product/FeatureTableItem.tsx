import { cn } from "@/lib/utils";

function FeatureTableItem({
  className,
  index,
  title,
  value,
  roundBottom,
}: {
  className?: string;
  index: number;
  title: string;
  value: string;
  roundBottom?: boolean;
}) {
  return (
    <tr className="text-center">
      <th className="">
        <div
          className={cn(
            "mt-4 border border-r-0 p-4",
            index % 2 === 0 ? "bg-zinc-200" : "bg-white",
            roundBottom ? "rounded-bl-2xl" : "",
            className,
          )}
        >
          {title}
        </div>
      </th>
      <td>
        <div
          className={cn(
            "mt-4 border border-l-0 p-4",
            index % 2 === 0 ? "bg-zinc-200" : "bg-white",
            roundBottom ? "rounded-br-2xl" : "",
            className,
          )}
        >
          {value}
        </div>
      </td>
    </tr>
  );
}

export default FeatureTableItem;
