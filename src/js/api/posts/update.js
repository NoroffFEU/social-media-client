export async function updatePost(id, { title, body, tags, media }) {}

const navToggle = document.getElementById("navToggle");
      const navLinks = document.getElementById("navLinks");

      // Toggle Navbar on Mobile View
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
      const fetchPostForEdit = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("id");
        const token = localStorage.getItem("token");
        const apiKey = localStorage.getItem("apiKey");

        if (!token || !apiKey || !postId) {
          document.getElementById("editPostContainer").innerHTML =
            "<p>Invalid access. Please log in and try again.</p>";
          return;
        }

        try {
          const response = await fetch(
            `https://v2.api.noroff.dev/social/posts/${postId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "X-Noroff-API-Key": apiKey,
              },
            }
          );

          const data = await response.json();

          if (response.ok) {
            const post = data.data;
            document.getElementById("editPostContainer").innerHTML = `
                        <div>
                            <label for="postTitle">Title:</label>
                            <input type="text" id="postTitle" value="${
                              post.title
                            }" />
                        </div>
                        <div>
                            <label for="postBody">Content:</label>
                            <textarea id="postBody">${
                              post.body || ""
                            }</textarea>
                        </div>
                    `;
          } else {
            throw new Error(
              data.errors[0]?.message || "Failed to fetch post for editing"
            );
          }
        } catch (error) {
          console.error("Error fetching post for editing:", error);
          document.getElementById(
            "errorMessage"
          ).textContent = `Error: ${error.message}`;
        }
      };

      document
        .getElementById("saveButton")
        .addEventListener("click", async () => {
          const title = document.getElementById("postTitle").value;
          const body = document.getElementById("postBody").value;
          const urlParams = new URLSearchParams(window.location.search);
          const postId = urlParams.get("id");

          const token = localStorage.getItem("token");
          const apiKey = localStorage.getItem("apiKey");

          try {
            const response = await fetch(
              `https://v2.api.noroff.dev/social/posts/${postId}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                  "X-Noroff-API-Key": apiKey,
                },
                body: JSON.stringify({ title, body }),
              }
            );

            if (response.ok) {
              alert("Post updated successfully!");
              window.location.href = "your_posts.html";
            } else {
              const data = await response.json();
              throw new Error(
                data.errors[0]?.message || "Failed to update post"
              );
            }
          } catch (error) {
            console.error("Error updating post:", error);
            document.getElementById(
              "errorMessage"
            ).textContent = `Error: ${error.message}`;
          }
        });

      window.onload = fetchPostForEdit;