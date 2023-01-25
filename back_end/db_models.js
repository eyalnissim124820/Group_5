const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://aahsweephgfviqmbtqgm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHN3ZWVwaGdmdmlxbWJ0cWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2MzU1NDUsImV4cCI6MTk5MDIxMTU0NX0.LY4gQYAowg3kWTrBuViNpX9UZBy72Fr4dYRlmbkBP3U";
const supabase = createClient(supabaseUrl, supabaseKey);
