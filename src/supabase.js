import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  'https://ebaptcitgftkavzxelir.supabase.co';
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViYXB0Y2l0Z2Z0a2F2enhlbGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MzQxNDYsImV4cCI6MjAwMjUxMDE0Nn0.w3g67XFpcJ5SMz6aT_lzzLTmSakdEd0t77bJVESdfH4";
          

          
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;
