const users =
    JSON.parse(
        localStorage.getItem("earnovaUsers")
    ) || [];


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const loginButtons =
    document.querySelectorAll(".login-btn");


loginButtons.forEach(function (button) {

    button.onclick = function () {

        showRegisterLoginPopup("login");

    };

});


        function showRegisterLoginPopup(type) {

            const popup =
                document.createElement("div");


            popup.style.cssText = `
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,0.65);
                display:flex;
                align-items:center;
                justify-content:center;
                z-index:9999;
            `;


            popup.innerHTML = `

                <div style="
                    background:white;
                    width:350px;
                    max-width:90%;
                    padding:30px;
                    border-radius:15px;
                    text-align:center;
                ">
                <img
    src="earnova img.jpeg"
    alt="Earnova"
    style="
        width:70px;
        height:70px;
        object-fit:cover;
        border-radius:50%;
        display:block;
        margin:0 auto 15px;
    "
>

                    <button id="closePopup" style="
                        float:right;
                        border:none;
                        background:none;
                        font-size:25px;
                        cursor:pointer;
                    ">×</button>

                    <h2>
                        ${
                            type === "register"
                            ? "Create Earnova Account"
                            : "Welcome to Earnova"
                        }
                    </h2>

                    <p>
                        ${
                            type === "register"
                            ? "Create your account"
                            : "Login to continue"
                        }
                    </p>

                    ${
                        type === "register"

                        ? `

                            <input
                                id="name"
                                type="text"
                                placeholder="Full Name"
                                style="
                                    width:100%;
                                    padding:12px;
                                    margin:8px 0;
                                    box-sizing:border-box;
                                "
                            >

                            <input
                                id="email"
                                type="email"
                                placeholder="Email Address"
                                style="
                                    width:100%;
                                    padding:12px;
                                    margin:8px 0;
                                    box-sizing:border-box;
                                "
                            >

                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                style="
                                    width:100%;
                                    padding:12px;
                                    margin:8px 0;
                                    box-sizing:border-box;
                                "
                            >

                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                style="
                                    width:100%;
                                    padding:12px;
                                    margin:8px 0;
                                    box-sizing:border-box;
                                "
                            >

                            <label style="display:block;text-align:left;font-size:13px;line-height:1.45;margin-top:8px;">
                                <input id="eligibilityConsent" type="checkbox" required style="width:auto;">
                                I confirm I am at least 18 years old and agree to the <a href="terms.html" target="_blank" rel="noopener">Terms</a> and <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a>.
                            </label>

                            <button
                                id="createAccount"
                                style="
                                    width:100%;
                                    padding:12px;
                                    margin-top:10px;
                                    background:#243b6b;
                                    color:white;
                                    border:none;
                                    border-radius:7px;
                                    cursor:pointer;
                                "
                            >
                                Create Account
                            </button>

                            <p style="margin-top:15px;">

                                Already have an account?

                                <button
                                    id="goLogin"
                                    style="
                                        border:none;
                                        background:none;
                                        color:#243b6b;
                                        cursor:pointer;
                                    "
                                >
                                    Login
                                </button>

                            </p>

                        `

                        : `

                            <input
                                id="loginEmail"
                                type="email"
                                placeholder="Email Address"
                                style="
                                    width:100%;
                                    padding:12px;
                                    margin:8px 0;
                                    box-sizing:border-box;
                                "
                            >

                            <input
                                id="loginPassword"
                                type="password"
                                placeholder="Password"
                                style="
                                    width:100%;
                                    padding:12px;
                                    margin:8px 0;
                                    box-sizing:border-box;
                                "
                            >

                            <button
                                id="loginSubmit"
                                style="
                                    width:100%;
                                    padding:12px;
                                    margin-top:10px;
                                    background:#243b6b;
                                    color:white;
                                    border:none;
                                    border-radius:7px;
                                    cursor:pointer;
                                "
                            >
                                Login
                            </button>

                            <p style="margin-top:15px;">

                                Don't have an account?

                                <button
                                    id="goRegister"
                                    style="
                                        border:none;
                                        background:none;
                                        color:#243b6b;
                                        cursor:pointer;
                                    "
                                >
                                    Create Account
                                </button>

                            </p>

                        `
                    }

                </div>
            `;


            document.body.appendChild(popup);


            document.getElementById(
                "closePopup"
            ).onclick = function () {

                popup.remove();

            };


            /* ============================
               REGISTER
            ============================ */

            if (type === "register") {

                document.getElementById(
                    "createAccount"
                ).onclick = async function () {

                    const name =
                        document.getElementById(
                            "name"
                        ).value.trim();


                    const email =
                        document.getElementById(
                            "email"
                        ).value.trim();


                    const password =
                        document.getElementById(
                            "password"
                        ).value;


                    const confirmPassword =
                        document.getElementById(
                            "confirmPassword"
                        ).value;


                    if (
                        !name ||
                        !email ||
                        !password ||
                        !confirmPassword
                    ) {

                        alert(
                            "Please fill all fields."
                        );

                        return;
                    }


                    if (
                        password !==
                        confirmPassword
                    ) {

                        alert(
                            "Passwords do not match."
                        );

                        return;
                    }


                    if (password.length < 6) {

                        alert(
                            "Password must be at least 6 characters."
                        );

                        return;
                    }

                    if (!document.getElementById("eligibilityConsent").checked) {
                        alert("You must be at least 18 and agree to the Terms and Privacy Policy to create an account.");
                        return;
                    }


                    const existingUser =
                        users.find(
                            function (user) {

                                return (
                                    user.email
                                        .toLowerCase()
                                    ===
                                    email.toLowerCase()
                                );

                            }
                        );


                    if (existingUser) {

                        alert(
                            "An account with this email already exists."
                        );

                        return;
                    }


                    /* ============================
                       SUPABASE REGISTRATION
                    ============================ */

                    const result =
                        await registerWithSupabase(
                            name,
                            email,
                            password
                        );


                    if (!result.success) {

                        alert(
                            "Registration failed: " +
                            result.error
                        );

                        return;
                    }


                    const newUser =
                        result.data.user;


                    /* ============================
                       CREATE REFERRAL ID
                    ============================ */

                    const referralId =
                        "EV" +
                        newUser.id
                            .replace(/-/g, "")
                            .substring(
                                0,
                                10
                            )
                            .toUpperCase();


                    /* ============================
                       CREATE SUPABASE USER PROFILE
                    ============================ */

                    const profileResult =
                        await supabaseClient
                            .from("users")
                            .insert({

                                auth_id:
                                    newUser.id,

                                name:
                                    name,

                                email:
                                    email,

                                referral_id:
                                    referralId,

                                blocked:
                                    false

                            });


                    if (
                        profileResult.error
                    ) {

                        console.error(
                            "Profile creation error:",
                            profileResult.error
                        );


                        await supabaseClient
                            .auth
                            .signOut();


                        alert(
                            "Account was created, but profile setup failed.\n\nPlease try again."
                        );

                        return;
                    }


                    console.log(
                        "Earnova profile created successfully."
                    );


                    /* ============================
                       LOCAL USER
                    ============================ */

                    const newLocalUser = {

                        name:
                            name,

                        email:
                            email,

                        referralId:
                            referralId,

                        blocked:
                            false

                    };


                    const updatedUsers =
                        JSON.parse(
                            localStorage.getItem(
                                "earnovaUsers"
                            )
                        ) || [];


                    updatedUsers.push(
                        newLocalUser
                    );


                    localStorage.setItem(
                        "earnovaUsers",
                        JSON.stringify(
                            updatedUsers
                        )
                    );


                    /* ============================
                       SUCCESS
                    ============================ */

                    alert(
                        "Account created successfully!\n\nYour Referral ID: " +
                        referralId
                    );


                    popup.remove();


                    showRegisterLoginPopup(
                        "login"
                    );

                };


                document.getElementById(
                    "goLogin"
                ).onclick = function () {

                    popup.remove();

                    showRegisterLoginPopup(
                        "login"
                    );

                };

            }


            /* ============================
               LOGIN
            ============================ */

            else {

                document.getElementById(
                    "loginSubmit"
                ).onclick = async function () {

                    const email =
                        document.getElementById(
                            "loginEmail"
                        ).value.trim();


                    const password =
                        document.getElementById(
                            "loginPassword"
                        ).value;


                    if (!email || !password) {

                        alert(
                            "Please enter email and password."
                        );

                        return;
                    }


                    /* ============================
                       SUPABASE LOGIN
                    ============================ */

                    const loginResult =
                        await supabaseClient.auth
                            .signInWithPassword({

                                email:
                                    email,

                                password:
                                    password

                            });


                    const data =
                        loginResult.data;

                    const error =
                        loginResult.error;


                    if (error) {

                        alert(
                            "Login failed: " +
                            error.message
                        );

                        return;
                    }


                    /* ============================
                       GET USER PROFILE
                    ============================ */

                    const dbResult =
                        await supabaseClient
                            .from("users")
                            .select(
                                "name,email,referral_id,blocked"
                            )
                            .eq(
                                "auth_id",
                                data.user.id
                            )
                            .maybeSingle();


                    if (dbResult.error) {

                        console.error(
                            "User profile error:",
                            dbResult.error
                        );


                        await supabaseClient
                            .auth
                            .signOut();


                        alert(
                            "Unable to load your Earnova account."
                        );

                        return;
                    }


                    const dbUser =
                        dbResult.data;


                    if (!dbUser) {

                        await supabaseClient
                            .auth
                            .signOut();


                        alert(
                            "Earnova account profile not found."
                        );

                        return;
                    }


                    /* ============================
                       BLOCK CHECK
                    ============================ */

                    if (
                        dbUser.blocked === true
                    ) {

                        await supabaseClient
                            .auth
                            .signOut();


                        alert(
                            "Your Earnova account has been blocked by the admin.\n\nPlease contact support for assistance."
                        );

                        return;
                    }


                    /* ============================
                       CREATE USER OBJECT
                    ============================ */

                    const user = {

                        name:
                            dbUser.name ||
                            data.user
                                .user_metadata
                                ?.name ||
                            "Earnova User",

                        email:
                            dbUser.email ||
                            data.user.email,

                        referralId:
                            dbUser.referral_id ||
                            (
                                "EV" +
                                data.user.id
                                    .replace(
                                        /-/g,
                                        ""
                                    )
                                    .substring(
                                        0,
                                        10
                                    )
                                    .toUpperCase()
                            ),

                        blocked:
                            false

                    };


                    /* ============================
                       SAVE LOGIN
                    ============================ */

                    localStorage.setItem(
                        "earnovaLoggedInUser",
                        JSON.stringify(
                            user
                        )
                    );


                    /* ============================
                       UPDATE LOCAL USERS
                    ============================ */

                    const currentUsers =
                        JSON.parse(
                            localStorage.getItem(
                                "earnovaUsers"
                            )
                        ) || [];


                    const existingIndex =
                        currentUsers.findIndex(
                            function (item) {

                                return (
                                    item.email
                                        .toLowerCase()
                                    ===
                                    user.email
                                        .toLowerCase()
                                );

                            }
                        );


                    if (
                        existingIndex !== -1
                    ) {

                        currentUsers[
                            existingIndex
                        ] = user;

                    } else {

                        currentUsers.push(
                            user
                        );

                    }


                    localStorage.setItem(
                        "earnovaUsers",
                        JSON.stringify(
                            currentUsers
                        )
                    );


                    /* ============================
                       LOGIN SUCCESS
                    ============================ */

                    alert(
                        "Login successful!"
                    );


                    popup.remove();


                    window.location.href =
                        "dashboard.html";

                };


                document.getElementById(
                    "goRegister"
                ).onclick = function () {

                    popup.remove();

                    showRegisterLoginPopup(
                        "register"
                    );

                };

            }

        }

    }
);