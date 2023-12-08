import { Database } from "@/types/supabase.type";
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
