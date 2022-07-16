// document.addEventListener("DOMContentLoaded", function() {});
function getBooks() {
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    // .then(json => console.log(json))
    .then(json => displayTitlesForBooks(json))
}

const displayTitlesForBooks = books => {
    const list = document.getElementById('list')
    books.forEach(book => {
        const item = document.createElement('li');
        item.textContent = book.title;
        addListenerToTitle(item, book);
        list.append(item);
    })
}
const addListenerToTitle = (listItem, book) => {
    const showPanel = document.getElementById('show-panel');
    listItem.addEventListener('click', () => {
    showPanel.textContent = "";  
        // console.log(listItem.textContent + "clicked")
        const image = document.createElement('img');
        image.src = book.img_url;
        const p = document.createElement('p');
        p.textContent = book.description;

        showPanel.append(image, p)
    })
}
getBooks();


