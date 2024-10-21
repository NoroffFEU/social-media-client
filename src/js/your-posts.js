const navToggle = document.getElementById("navToggle");
      const navLinks = document.getElementById("navLinks");

      // Toggle Navbar on Mobile View
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
      const fetchAllPosts = async () => {
        const token = localStorage.getItem("token");
        const apiKey = localStorage.getItem("apiKey");
        const name = localStorage.getItem("name");
        const postsContainer = document.getElementById("postsContainer");

        if (!token || !apiKey || !name) {
          postsContainer.innerHTML = "<p>Please log in to view posts.</p>";
          return;
        }

        try {
          const response = await fetch(
            `https://v2.api.noroff.dev/social/profiles/${name}/posts`,
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
            displayPosts(data.data);
          } else {
            throw new Error(data.errors[0]?.message || "Failed to fetch posts");
          }
        } catch (error) {
          console.error("Error fetching posts:", error);
          postsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
        }
      };

      const displayPosts = (posts) => {
        const postsContainer = document.getElementById("postsContainer");
        postsContainer.innerHTML = "";

        if (posts.length === 0) {
          postsContainer.innerHTML = "<p>No posts available.</p>";
          return;
        }

        posts.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.innerHTML = `
                    ${
                      post.media && post.media.url
                        ? `<img src="${post.media.url}" alt="Post Image" class="post-image">`
                        : ""
                    }
                    <div class="post-content">
                        <h2 class="post-title">${post.title}</h2>
                        <p class="post-body">${post.body || ""}</p>
                    </div>
                    <div class="post-actions">
                        <button onclick="editPost(${
                          post.id
                        })"><i class="far fa-edit"></i> Edit</button>
                        <button onclick="deletePost(${
                          post.id
                        })"><i class="far fa-trash-alt"></i> Delete</button>
                    </div>
                `;
          postsContainer.appendChild(postElement);
        });
      };

      const editPost = (postId) => {
        window.location.href = `edit.html?id=${postId}`;
      };

      const deletePost = async (postId) => {
        if (!confirm("Are you sure you want to delete this post?")) {
          return;
        }

        const token = localStorage.getItem("token");
        const apiKey = localStorage.getItem("apiKey");

        try {
          const response = await fetch(
            `https://v2.api.noroff.dev/social/posts/${postId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "X-Noroff-API-Key": apiKey,
              },
            }
          );

          if (response.ok) {
            alert("Post deleted successfully!");
            fetchAllPosts(); // Refresh the posts
          } else {
            const data = await response.json();
            throw new Error(data.errors[0]?.message || "Failed to delete post");
          }
        } catch (error) {
          console.error("Error deleting post:", error);
          alert(`Error: ${error.message}`);
        }
      };

      const navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");

        burger.addEventListener("click", () => {
          nav.classList.toggle("nav-active");
          burger.classList.toggle("toggle");
        });

        navLinks.forEach((link) => {
          link.addEventListener("click", () => {
            nav.classList.remove("nav-active");
            burger.classList.remove("toggle");
          });
        });
      };

      window.onload = () => {
        fetchAllPosts();
        navSlide();
      };