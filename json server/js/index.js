// javascript for index.html

const container = document.querySelector(".blogs");

const searchForm = document.querySelector(".search");

const renderPosts = async (term) => {
  let url = "http://localhost:3000/posts?_sort=likes&_order=asc";

  if (term) {
    url += `&q=${term}`;
  }

  const res = await fetch(url);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    template += `
        <div class="post">
            <h3>${post.title}</h3>
            <p><small>${post.likes} likes</small></p> 
            <p>${post.body.slice(0, 200)}</p>
            <a href="/details.html?id=${post.id}"><i class="fa-solid fa-magnifying-glass"></i></a>
        </div>
    `;
  });
  container.innerHTML = template;
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});

window.addEventListener("DOMContentLoaded", () => renderPosts());
