import { Card, CardContent } from "@/components/ui/card";
import NewMediaForm from "@/features/Admin/NewMediaForm";

function NewMediaPage() {
  return (
    <div className="flex flex-col">
      <div className="bg-background-hero mb-8 p-8">
        <h1 className="text-center text-2xl font-bold capitalize text-white">
          Add a new Product
        </h1>
      </div>
      <div className="mx-auto max-w-7xl">
        <Card>
          <CardContent>
            <NewMediaForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default NewMediaPage;
