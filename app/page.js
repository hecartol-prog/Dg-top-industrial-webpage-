import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/site-data";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
