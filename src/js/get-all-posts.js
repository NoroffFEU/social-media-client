const navToggle = document.getElementById("navToggle");
      const navLinks = document.getElementById("navLinks");

      // Toggle Navbar on Mobile View
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });

      // JavaScript to handle the search button click event
      document
        .getElementById("searchButton")
        .addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default form submission if in a form
          fetchAllPosts();
        });

      // Adding input event listener to search input
      document.getElementById("searchInput").addEventListener("input", () => {
        fetchAllPosts();
      });

      const fetchAllPosts = async () => {
        const token = localStorage.getItem("token");
        const apiKey = localStorage.getItem("apiKey");
        const postsContainer = document.getElementById("postsContainer");
        const search = document.getElementById("searchInput").value.trim(); // Get the search input value

        if (!token || !apiKey) {
          postsContainer.innerHTML = "<p>Please log in to view posts.</p>";
          return;
        }

        // Determine if search input is empty or not
        const apiUrl = search
          ? `https://v2.api.noroff.dev/social/posts/search?q=${encodeURIComponent(
              search
            )}&_author=true&_comments=true&_reactions=true`
          : "https://v2.api.noroff.dev/social/posts?_author=true&_comments=true&_reactions=true";

        try {
          const response = await fetch(apiUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
              "X-Noroff-API-Key": apiKey,
            },
          });

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
          const postElement = document.createElement("article");
          postElement.classList.add("post");

          // Check if media exists and is not null
          const mediaElement =
            post.media && post.media.url
              ? `<img src="${post.media.url}" alt="${
                  post.media.alt || "Post Image"
                }" class="post-image">`
              : "";

          // Extract user information
          const userName = post.author?.name || "Unknown User"; // Get the author's name or use "Unknown User" if undefined
          const userAvatar =
            post.author?.avatar?.url ||
            "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg"; // Handle undefined avatar URLs

          postElement.innerHTML = `
      <div class="post-header">
          <img src="${userAvatar}" alt="${userName}'s Avatar" class="post-avatar">
          <div>
              <div class="post-user">${userName}</div> <!-- Display username -->
              <div class="post-timestamp">${new Date(
                post.created
              ).toLocaleString()}</div>
          </div>
      </div>
      ${mediaElement}
      <div class="post-content">
          <h2 class="post-title">${post.title || "Untitled Post"}</h2>
          <p class="post-body">${post.body || ""}</p>
      </div>
      <div class="post-actions">
          <button id="likeButton-${post.id}">
            <i class="fas fa-thumbs-up"></i> Like
          </button>
          <button><i class="far fa-comment"></i> Comment</button>
          <button><i class="fas fa-share"></i> Share</button>
      </div>
    `;

          const likeButton = postElement.querySelector(
            `#likeButton-${post.id}`
          );
          likeButton.onclick = async () => {
            try {
              await reactToPost(post.id, "👍");
              updateReactionButton(post.id, "👍", true);
            } catch (error) {
              console.error("Error reacting to post:", error);
              alert(
                `Unable to react to the post at this time. Please try again later. (Error: ${error.message})`
              );
            }
          };

          postsContainer.appendChild(postElement);
        });
      };
      const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      const retryFetch = async (url, options, retries = 3, backoff = 300) => {
        try {
          return await fetch(url, options);
        } catch (error) {
          if (retries === 0) throw error;
          await wait(backoff);
          return retryFetch(url, options, retries - 1, backoff * 2);
        }
      };

      const reactToPost = async (postId, symbol) => {
        const token = localStorage.getItem("token");
        const apiKey = localStorage.getItem("apiKey");
        console.log("Reacting to post:", postId, "with symbol:", symbol);

        const emojiRegex = /\p{Extended_Pictographic}/gu;
        if (!emojiRegex.test(symbol)) {
          throw new Error("Please provide a valid emoji as a reaction.");
        }

        if (!token || !apiKey) {
          throw new Error("Please log in to react to posts.");
        }

        const url = `https://v2.api.noroff.dev/social/posts/${postId}/react/${encodeURIComponent(
          symbol
        )}`;
        const options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "X-Noroff-API-Key": apiKey,
          },
        };

        try {
          const response = await retryFetch(url, options);

          if (!response.ok) {
            const errorData = await response.json();
            console.error("Server response:", errorData);
            throw new Error(
              `Server error: ${
                errorData.errors?.[0]?.message || response.statusText
              }`
            );
          }

          const data = await response.json();
          console.log("Reaction response:", data);
          return data;
        } catch (error) {
          console.error("Error in reactToPost:", error);
          throw new Error(
            `Failed to react to post ${postId}: ${error.message}`
          );
        }
      };

      const updateReactionButton = (postId, symbol, isActive) => {
        const reactionButton = document.getElementById(
          `reactionButton-${postId}-${symbol}`
        );
        if (reactionButton) {
          reactionButton.innerHTML = isActive ? `${symbol} Active` : symbol;
          reactionButton.classList.toggle("active", isActive);
        }
      };

      document
        .getElementById("logoutButton")
        .addEventListener("click", function () {
          // Clear the user token and any user data from local storage
          localStorage.removeItem("token");
          localStorage.removeItem("apiKey");
          localStorage.removeItem("userData"); // Optional

          // Redirect to the login page
          window.location.href = "/login.html"; // Change to your login page URL
        });

      fetchAllPosts();