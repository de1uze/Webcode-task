const bookURL = 'https://anapioficeandfire.com/api';
async function fetchbooks() {
    try{
    const response  = await fetch(`${bookURL}/books`);
    if(!response.ok){
        throw new Error(`Failed to fetch books: ${response.status}`);
    }
    return await response.json();
    
    }catch(e) {
        console.log(e);
    }
}

function listsPosts(postContainerElementId){
    const postContainerElement = document.getElementById(postContainerElementId);

    if(!postContainerElement){
        return;
    }
    fetchbooks()
    .then((books ) =>{
        if(!books){
            postContainerElement.innerText = "No Books";
                return;
        }

        for(const Books of books){
            postContainerElement.appendChild(postElement(books));
        }
    })
    .catch(e => {
        console.log(e);
    })
}
function postElement(books){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href',`${bookURL}/books/${books.isbn}`);
    anchorElement.setAttribute('target','_blank');
    anchorElement.innerText = books.postTitleElement;

    const postTitleElement = document.createElement('h4');
    postTitleElement.appendChild(anchorElement);

    return postTitleElement;
}













/*
const books = await response.json();

    return books;

document.addEventListener("DOMContentLoaded", async() =>{
    let books = [];

    try{
        books = await loadBooks();
    }catch(e){
        console.log("Error!");
        console.log(e);
    }
    console.log(books);
});

/*fetch("https://www.anapioficeandfire.com/api/books/1")
.then(res => res.json())
.then(data => console.log(data));
*/