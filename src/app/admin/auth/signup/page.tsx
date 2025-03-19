import { Card, CardContent } from "@/components/ui/card";
import AdminSignupForm from "@/features/Admin/AdminSignupForm";

async function AdminSignup() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <Card>
        <CardContent>
          <AdminSignupForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminSignup;
