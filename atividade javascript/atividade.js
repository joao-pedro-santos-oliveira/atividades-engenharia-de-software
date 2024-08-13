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

const book1 = new Book("teste livro", "testando livro", "saitama")
const book2 = new Book("teste livro2", "testando livro2", "saitama")
const book3 = new Book("teste livro3", "testando livro3", "saitama")
const book4 = new Book("teste livro4", "testando livro4", "saitama")
const book5 = new Book("teste livro5", "testando livro5", "saitama")

const library = new Library()

library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.addBook(book5)

const info = {
    title: "alou",
    description: "teste",
    author: "nao sei"
}

library.getBooks()