const { createClient } = require("@supabase/supabase-js");
const { v4: uuidv4 } = require("uuid");

const supabaseUrl = "https://aahsweephgfviqmbtqgm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhaHN3ZWVwaGdmdmlxbWJ0cWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2MzU1NDUsImV4cCI6MTk5MDIxMTU0NX0.LY4gQYAowg3kWTrBuViNpX9UZBy72Fr4dYRlmbkBP3U";

const supabase = createClient(supabaseUrl, supabaseKey);

async function addReadBookModel(bookId, userId) {
  try {
    const { data, error } = await supabase
      .from("usersBooks")
      .insert({ bookId, userId, id: uuidv4() });

    if (error) throw error;
    return data;
  } catch (error) {
    return { error };
  }
}

async function removeReadBook(bookId, userId) {
  try {
    const { data, error } = await supabase
      .from("usersBooks")
      .delete()
      .eq("bookId", bookId)
      .eq("userId", userId);

    if (error) throw error;
    console.log(data);
  } catch (error) {
    console.error(error);
    return { error };
  }
}

async function getUsersBooks(userId) {
  try {
    const { data, error } = await supabase
      .from("usersBooks")
      .select()
      .eq("userId", userId);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(error);
    return { error };
  }
}

module.exports = { addReadBookModel, removeReadBook, getUsersBooks };
