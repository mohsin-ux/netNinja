const addform = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

//--------- add todos ---------

addform.addEventListener("submit", (e) => {
   e.preventDefault();
   const todo = addform.add.value.trim();

   if (todo.length) {
      const html = `
        <li class="list-group-item d-flex justify-content-between text-light">
            <span>${todo}</span>
            <i class="far fa fa-trash delete"></i>    
        </li>
    `;
      list.innerHTML += html;

      addform.reset();
   }
});

//----------- delete todos -----------
list.addEventListener("click", (e) => {
   if (e.target.classList.contains(`delete`)) {
      e.target.parentElement.remove();
   }
});

//------------ keyup event--------------
const filterTodos = (term) => {
  // console.log(term);
   Array.from(list.children)
      .filter((todo) => !todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.add("filtered"));
};

search.addEventListener("keyup", () => {
   const term = search.value.toLowerCase();
   filterTodos(term);
});
