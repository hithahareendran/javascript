function createBook(selector, bookTitle, authorName, isbn) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, bookTitle, authorName, isbn) {
            let container = $(selector);
            let bookContainer = $("<div>");
            bookContainer.attr("id", `book${id}`);
            bookContainer.css("border", "none");
            $(`<p class="title">${bookTitle}</p>`).appendTo(bookContainer);
            $(`<p class="author">${authorName}</p>`).appendTo(bookContainer);
            $(`<p class="isbn">${isbn}</p>`).appendTo(bookContainer);
 
            let selectBtn = $("<button>Select</button>");
            let deselectBtn = $("<button>Deselect</button>");
 
            selectBtn.click(function () {
                bookContainer.css("border", "2px solid blue")
            });
 
            deselectBtn.on("click", function () {
                bookContainer.css("border", "none");
            });
 
            //selectBtn.appendTo(bookContainer);
            bookContainer.append(selectBtn);
            //deselectBtn.appendTo(bookContainer);
            bookContainer.append(deselectBtn);
 
            //bookContainer.appendTo(container);
            container.append(bookContainer);
            //id++;
        }
    }());
    bookGenerator(selector, bookTitle, authorName, isbn);
    bookGenerator(selector, bookTitle, authorName, isbn);
    bookGenerator(selector, bookTitle, authorName, isbn);
}