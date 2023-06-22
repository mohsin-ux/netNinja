const list = document.querySelector('ul');
form = document.querySelector('form');

//========= setting UI ===========

const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = `
        <li data-id = "${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete<button>
        </li>
    `;
    list.innerHTML += html;
}

//---------- delete UI ------------

const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            recipe.remove();
        };
    });
}
//------------ get documents ------------

// db.collection('recipes').get().then(snapshot => {
//     //when we have the data
//     snapshot.docs.forEach(doc => {  
//         addRecipe(doc.data(), doc.id);
//     });
// }).catch(err => {
//     console.log(err);
// });

db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc();
        if(change.type === 'added'){
            addRecipe(doc.data(), doc.id);
        } 
    });
})

//=---------- add documents -----------=
form.addEventListner('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };  

    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch(err => {
        console.log(err);
    });
});

//----------- deleting documents ------------
list.addEventListener('click', e => {
    if(e.target.tagname === 'button'){
        const id = e.target.parentElemet.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(() => {
            console.log('deleted');
        });
    }
}); 