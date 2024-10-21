const registerUser = async (name, email, password, bio, url) => {
  const button = document.querySelector('button[type="submit"]');
  const statusMessage = document.getElementById("statusMessage");

  try {
    button.classList.add("loading-active");
    statusMessage.textContent = "";

    const response = await fetch(
      "https://v2.api.noroff.dev/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          bio: bio,
          venueManager: true,
          password: password,
          avatar: {
            url: url,
          },
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      statusMessage.textContent = "Registration successful!";
      window.location.href = "../../index.html";
      statusMessage.className = "success";
    } else {
      statusMessage.textContent =
        "Registration failed: " + data.errors[0].message;
      statusMessage.className = "error";
      console.error("Registration failed:", data);
    }
  } catch (error) {
    console.error("Error:", error);
    statusMessage.textContent = "An error occurred during registration.";
    statusMessage.className = "error";
  } finally {
    button.classList.remove("loading-active");
  }
};

const uploadWidget = cloudinary.createUploadWidget(
  {
    cloudName: "ddj55m5cg",
    uploadPreset: "social-app", // Set up an upload preset in Cloudinary
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log(
        "Image uploaded successfully: ",
        result.info.secure_url
      );
      document.getElementById("imageUrl").value = result.info.secure_url; 
      document.getElementById("button-upload").innerText = "Uploaded";
      document.getElementById("button-upload").className = "fa-check"; 
    } else if (error) {
      console.error("Upload error:", error); 
    }
  }
);

// Open the upload widget when the button is clicked
document.getElementById("button-upload").addEventListener("click", () => {
  uploadWidget.open(); 
});

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const bio = document.getElementById("bio").value;
    const media = document.getElementById("imageUrl").value;
    registerUser(name, email, password, bio, media);
  });