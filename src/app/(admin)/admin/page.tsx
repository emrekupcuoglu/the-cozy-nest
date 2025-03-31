import { SidebarTrigger } from "@/components/ui/sidebar";
import { getCurrentUserServer } from "@/lib/supabase/data-service";
import { redirect } from "next/navigation";

async function Admin() {
  const userData = await getCurrentUserServer();

  if (!userData) redirect("/admin/auth/login");

  if (!userData.isAuthenticated) redirect("/admin/auth/login");

  return (
    <div>
      <SidebarTrigger className="h-24 w-24 text-black" />
      <div className="mx-auto max-w-7xl p-4"></div>
    </div>
  );
}

export default Admin;
