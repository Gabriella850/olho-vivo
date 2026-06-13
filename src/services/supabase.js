import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fdmoojupvhjmwsigyckw.supabase.co";

const supabaseKey =
  "sb_publishable_8_D0lZJCp0nXeW3NOuu9rA_aFtPAsZC";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);