import { Database } from "./supabase.type";

export type ICategory = Database["public"]["Tables"]["categories"]["Row"];
export type IProduct = Database["public"]["Tables"]["products"]["Row"];

export type CategoryId = ICategory["id"];
