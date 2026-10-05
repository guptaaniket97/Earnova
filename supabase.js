const SUPABASE_URL = "https://kangruhnbspbisokfnjt.supabase.co";

const SUPABASE_KEY = "sb_publishable_QtB_rFf1fRw26InAIj4baQ_o5Jfibvv";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

console.log("Earnova Supabase connected:", supabaseClient);