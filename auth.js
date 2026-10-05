async function registerWithSupabase(name, email, password) {
    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                name: name
            }
        }
    });

    if (error) {
        console.error("Registration error:", error);
        return { success: false, error: error.message };
    }

    return { success: true, data: data };
}
