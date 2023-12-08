import { supabaseClient } from "@/lib/supabaseClient";

export async function getCategories() {
  let { data: categories, error } = await supabaseClient
    .from("categories")
    .select("*");

  return { categories, error };
}

export async function getCategory(id: number) {
  let { data: category, error } = await supabaseClient
    .from("categories")
    .select("*")
    .eq("id", id)
    .single();

  return { category, error };
}
