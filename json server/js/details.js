// javascript for details.html

// -----get id from search bar -------
const getParams = new URLSearchParams(window.location.search);
const id = getParams.get("id");

const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".delete");
const home = document.querySelector(".home");

home.addEventListener("click", (e) => {
  window.location.replace("/index.html");
});


const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();
  console.log(post);

  const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    `;
  container.innerHTML = template;
};



deleteBtn.addEventListener("click", async () => {
  const res = await fetch(" http://localhost:3000/posts/" + id, {
        method: "DELETE",
      }
  );
  window.location.replace("/index.html");
});

window.addEventListener("DOMContentLoaded", () => renderDetails());
