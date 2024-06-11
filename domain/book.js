class Book {

  #title;
  #author;
  #pages;
  #words;
  
  constructor(title, author, pages) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof (title) !== 'string') {
      throw new Error();
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error();
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof (author) !== 'string') {
      throw new Error();
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof (pages) !== 'number' || isNaN(pages)) {
      throw new Error();
    }
    if (pages < 1) {
      throw new Error();
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(wordCount) {
    if (!Number.isInteger(wordCount)) {
      throw new Error('La cantidad de palabras no es un numero.');
    }

    if (wordCount < 1) {
      throw new Error('La cantidad de palabras debe ser mayor a 0.');
    }
    
    this.#words = wordCount;
  }

  wordsPerPage() {
    if (!Number.isInteger(this.#words)) {
      throw new Error('La cantidad de palabras no es un número.');
    }

    return Number(this.#words / this.#pages);
  }

  toString() {
    const wordsStr = `Palabras: ${this.#words?this.#words:'N/A'}`;
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} ${wordsStr}`;
  }
}

export default Book;
