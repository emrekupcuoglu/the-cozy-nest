import { Card, CardContent } from "@/components/ui/card";
import AdminLoginForm from "@/features/Admin/AdminLoginForm";

async function AdminLogin() {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <Card>
        <CardContent>
          <AdminLoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminLogin;
