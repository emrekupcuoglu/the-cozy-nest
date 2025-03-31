import { updateSession } from "@/lib/supabase/middleware";
import { MiddlewareConfig, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config: MiddlewareConfig = {
  matcher: ["/admin/:path*"],
};
