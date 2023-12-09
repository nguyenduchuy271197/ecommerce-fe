import { supabaseClient } from "@/lib/supabaseClient";
import { CategoryId } from "@/types";

export async function getProducts() {
  let { data: products, error } = await supabaseClient
    .from("products")
    .select("*");

  return { products, error };
}

export async function getProductsByCategory(id: CategoryId) {
  let { data: products, error } = await supabaseClient
    .from("products")
    .select("*, categories (*), product_images (*)")
    .eq("category_id", id);

  return { products, error };
}
