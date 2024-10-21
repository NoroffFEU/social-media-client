const loginUser = async (email, password) => {
    const button = document.querySelector('button[type="submit"]');
    const statusMessage = document.getElementById("statusMessage");

    try {
      button.classList.add("loading-active");
      statusMessage.textContent = "";

      // Attempt to log in the user
      const response = await fetch("https://v2.api.noroff.dev/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        const token = data.data.accessToken;
        const name = data.data.name;
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        statusMessage.textContent = "Login successful!";
        statusMessage.className = "success";

        // Create API key after successful login
        await createApiKey(token); 

        // Redirect after successful login and API key creation
        window.location.href = "../../post/get-all-posts.html";
        console.log("Login successful! Token:", token);
      } else {
        statusMessage.textContent =
          "Login failed: " +
          (data.errors[0] ? data.errors[0].message : "Unknown error");
        statusMessage.className = "error";
        console.error("Login failed:", data);
      }
    } catch (error) {
      console.error("Error:", error);
      statusMessage.textContent = "An error occurred during login.";
      statusMessage.className = "error";
    } finally {
      button.classList.remove("loading-active");
    }
  };

  async function createApiKey(token) {
    try {
      const response = await fetch(
        "https://v2.api.noroff.dev/auth/create-api-key",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      const data = await response.json();
      if (response.ok) {
        const apiKey = data.data.key; // Extract the API key
        localStorage.setItem("apiKey", apiKey); // Store the API key in localStorage
        console.log("API Key created:", apiKey);
      } else {
        console.error("Failed to create API key:", data.errors[0].message);
      }
    } catch (error) {
      console.error("Error generating API key:", error);
    }
  }

  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      loginUser(email, password); // Call loginUser on form submit
    });