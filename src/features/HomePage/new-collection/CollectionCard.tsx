import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function CollectionCard({
  children,
  className,
  gridStyle,
}: {
  children: React.ReactNode;
  className?: string;
  gridStyle?: string;
}) {
  return (
    <div className={gridStyle}>
      {/* <Card className={`${className ? className : "bg-card-grey"} h-full`}> */}
      <Card className={cn("bg-card-grey h-full border-none", className)}>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

export default CollectionCard;
