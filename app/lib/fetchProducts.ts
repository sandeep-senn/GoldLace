import { client } from "@/app/lib/client";
import { getAllProducts } from "@/app/lib/queries";

export async function fetchProducts() {
  return await client.fetch(getAllProducts);
}
