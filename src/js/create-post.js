const navToggle = document.getElementById("navToggle");
        const navLinks = document.getElementById("navLinks");

        // Toggle Navbar on Mobile View
        navToggle.addEventListener("click", () => {
          navLinks.classList.toggle("open");
        });
      const createPost = async (title, body, mediaUrl) => {
        const token = localStorage.getItem("token");
        const apiKey = localStorage.getItem("apiKey");
        const statusElement = document.getElementById("postStatus");
        const submitButton = document.getElementById("submitButton");
        
        if (!token || !apiKey) {
          statusElement.textContent =
            "Missing API key or token. Please log in again.";
          statusElement.className = "error";
          return;
        }

        try {
          submitButton.innerHTML =
            '<span class="loading"></span>Creating post...';
          submitButton.disabled = true;
          statusElement.textContent = "";

          const response = await fetch(
            "https://v2.api.noroff.dev/social/posts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "X-Noroff-API-Key": apiKey,
              },
              body: JSON.stringify({
                title: title,
                body: body,
                media: {
                  url: mediaUrl,
                },
              }),
            }
          );

          const data = await response.json();
          if (response.ok) {
            statusElement.textContent = "Post created successfully!";
            statusElement.className = "success";
            console.log("Post created successfully:", data);
            // Optionally clear the form
            document.getElementById("createPostForm").reset();
          } else {
            throw new Error(data.errors[0].message || "Failed to create post");
          }
        } catch (error) {
          console.error("Error creating post:", error);
          statusElement.textContent = `Error: ${error.message}`;
          statusElement.className = "error";
        } finally {
          submitButton.innerHTML = "Create Post";
          submitButton.disabled = false;
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
          }
        }
      );

      document.getElementById("imageUploader").addEventListener(
        "click",
        function () {
          uploadWidget.open();
        },
        false
      );

      document
        .getElementById("createPostForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const title = document.getElementById("postTitle").value;
          const body = document.getElementById("postBody").value;
          const media = document.getElementById("imageUrl").value;
          createPost(title, body, media);
        });