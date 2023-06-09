/* class Rectangle {
    // Constructor to initialize the essential properties of the object
    constructor (w, h) {
        this.w = w;
        this.h = h;
    }
    // Method to calculate the perimeter of the rectangle
    get perimeter () {
        return (2 * (this.w + this.h));
    }
    // Method to check if the rectangle is valid
    get isValid () {
        return (this.w > 0 && this.h > 0);
    }
    // Method to check if object A is bigger than object B
    isBiggerThan (perimeterB) {
        return (this.perimeter > perimeterB.perimeter);
    }
}

class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
} */

class Book {
  #current_page = 1;
  // Define the main variables
  constructor(name, nb_pages) {
    this.name = name;
    this.nb_pages = nb_pages;
  }
  // Return the current page
  get page () {
    return this.#current_page;
  }
  // Increment #current_page to n+1
  nextPage() {
    if (this.#current_page < this.nb_pages) {
      this.#current_page++;
    }
  }
  // Reset page to 1
  close() {
    this.#current_page = 1;
  }
}

class Library {
  // Create an array (private to the class)
  #books = [];
  // Add a book
  addBook (book) {
    this.#books.push(book);
  }
  // Add several books
  addBooks (books) {
    this.#books.push(...books);
  }
  // Find a book by its first letter
  findBooksByLetter (letter) {
    const result = this.#books.filter(function(book) {
      // Lowercase to avoid to have case problems
      return book.name.toLowerCase().charAt(0) === letter.toLowerCase();
    });
    return result;
  }
}