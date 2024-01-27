import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tgxeezsumvabjyazhexw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRneGVlenN1bXZhYmp5YXpoZXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMzUwNzIsImV4cCI6MjAyMDYxMTA3Mn0.xEAjNJ6aJh6vpL-ZwZsQ717MstDoOrJkIEqNhOX15nc";
export const supabase = createClient(supabaseUrl, supabaseKey);
