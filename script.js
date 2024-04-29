
class addBookToLibrary {

// Book constructor
  constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }

// Create the elements that will contain the details of the book
  createDetails(elem, content, child, childTxt) {
    const makeElement = document.createElement(elem);
    makeElement.textContent = content;
    const childElem = document.createElement(child);
      if (child === "input") {
          childElem.setAttribute("type", "checkbox");
       }
       else {
         childElem.textContent = childTxt;
       }
     makeElement.appendChild(childElem);
     return makeElement
  }

// Create the div that will contain the book
  createBook = () => {

    const insertBook = document.createElement("div");
          insertBook.setAttribute("class", "card");

          // Add a delete button to every book that will be created
          const removeBtn = document.createElement("button");
          removeBtn.setAttribute("class", "delete")
          const removeIcon = document.createElement("img");
          removeIcon.setAttribute("src", "icons/bin.svg");
          removeBtn
          .appendChild(removeIcon);

          // Construct the book
          insertBook
          .append(
            this.createDetails("p", "Title: ", "span", this.title),
            this.createDetails("p", "Author: ", "span", this.author),
            this.createDetails("p", "Pages: ", "span", this.pages),
            this.createDetails("label", "Finished Reading: ", "input"),
            removeBtn
          );

          // Display the book
          const mainSection = document.querySelector("main")
          mainSection.appendChild(insertBook);
  }
}

(modalFunc = () => {
// Library elements selector
  const getTitle = document.querySelector("#title");
  const getAuthor = document.querySelector("#author");
  const getPages = document.querySelector("#pages");
  const submitData = document.querySelector("form");

// Dialog elements selector
  const dialog = document.querySelector("dialog");
  const showModal = document.querySelector(".add");
  const closeModal = document.querySelector("dialog .close");
 

// Modal control
  showModal.addEventListener("click", () => {
      dialog.showModal();
    });

  closeModal.addEventListener("click", (e) => {
      e.preventDefault();
      dialog.close();
    })

// Click event that adds a new book to the library
  submitData.addEventListener('submit', (e) => {
    // Prevent default of submit so that we can use the input values
    e.preventDefault();

    // Create a new instance of the class addBookToLibrary every submit,
    // then create the book using the input values
    const newBook = new addBookToLibrary(getTitle.value, getAuthor.value, getPages.value);
    newBook.createBook();
    // Add a click event to all of the delete buttons added to every book
    // that will remove it from the page
    const deleteItem = document.querySelectorAll(".delete");
    deleteItem.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.target.closest('div.card').remove();
      })
    })
    dialog.close();
    // Reset the form every submit
    submitData.reset();
  })
})();









