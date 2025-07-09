// app/lib/fetchHero.ts
import { client } from "@/app/lib/client";
import { getHeroQuery } from "@/app/lib/queries";

export async function fetchHero() {
  return await client.fetch(getHeroQuery);
}
