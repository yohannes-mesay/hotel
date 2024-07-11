import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hlfsvhzdyivtamdpcnlo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsZnN2aHpkeWl2dGFtZHBjbmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwNzY5NjksImV4cCI6MjAzNTY1Mjk2OX0.raqHzBKkmbOlrbEFyIChEEHrtxgpuny03k2kFt74aNE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
