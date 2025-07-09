import { client } from "@/app/lib/client";
import { getAllBannersQuery } from "@/app/lib/queries";

export async function fetchBanner() {
  return await client.fetch(getAllBannersQuery);
}