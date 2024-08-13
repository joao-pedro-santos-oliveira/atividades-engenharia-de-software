class Book{

    constructor(title, description, author){
        this.bookId =  Book.generateId();
        this.title = title;
        this.description = description;
        this.author = author;
    }

    static generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
      }
}



class Library{

    constructor(){
        this.books = [];
    }


    addBook(book){
        return this.books.push(book);
    }

    getBooks(){
        return this.books;
    }

    removeBookById(bookId){

        this.books.forEach(book => {
            if(bookId == book.bookId){
                const index = this.books.indexOf(book);
                this.books.splice(index, 1);
            }
        });

    }

    getBookById(bookId){
        return this.books.find(book => book.bookId === bookId);
    }

    updateBookById(bookId, info){
        const book = this.getBookById(bookId)
            if(book){
                book.title = info.title;
                book.description = info.description;
                book.author = info.author;
                return book
            }
    }
}


