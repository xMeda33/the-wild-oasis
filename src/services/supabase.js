import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tbmjxgrbzpunkakcalsg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRibWp4Z3JienB1bmtha2NhbHNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzExNTgxODEsImV4cCI6MjA0NjczNDE4MX0.D23izbNkT172c9q2nLb12NztnL6nzVAALX2BqoS03U4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
