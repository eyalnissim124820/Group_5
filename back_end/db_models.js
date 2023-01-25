const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://aahsweephgfviqmbtqgm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHN3ZWVwaGdmdmlxbWJ0cWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2MzU1NDUsImV4cCI6MTk5MDIxMTU0NX0.LY4gQYAowg3kWTrBuViNpX9UZBy72Fr4dYRlmbkBP3U";
const supabase = createClient(supabaseUrl, supabaseKey);

// async function getallbooks() {
//   const a = await supabase.from("books").select("*").limit(10);
//   console.log(a);
// }

async function checkEmail(req, res, next) {
  const email = req.body.email;
  const result = await supabase.from("users").select("*").eq("email", email);
  console.log(result.data);
  if (result.data.length === 0) {
    next();
  } else {
    res.status(400).send("email already exists");
  }
}

async function checkPassword(req, res, next) {
  const email = req.body.email;
  const result = await supabase.from("users").select("*").eq("email", email);
  console.log(result.statusText);
  if (result.data.length > 0) {
    req.result = result;
    console.log("hey");
    next();
  } else {
    res.status(404).send("user not found");
  }
}

module.exports = { checkEmail, supabase, checkPassword };
