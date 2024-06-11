import {describe, it, expect, beforeEach} from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350);
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => myBook = new Book(451, 1, 350)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => myBook = new Book('', 'Horacio Quiroga', 350)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => myBook.setAuthor(0)).toThrow();
  });

  it('check author is anonimo', () => {
    myBook.setAuthor('');
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check page param is a number', () => {
    expect(() => myBook.setPages('')).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => myBook.setPages(0)).toThrow();
  });

  it('setWords param is a number', () => {
    expect(() => myBook.setWords('')).toThrow();
  });

  it('setWords param not < 1', () => {
    expect(() => myBook.setWords(0)).toThrow();
  });

  it('toString()', () => {
    myBook.setWords(200);
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: 200');
  });

  it('toString() without words', () => {
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Palabras: N/A');
  });

  it('wordsPerPage returns the avarage number of words per page', () => {
    myBook.setWords(70000);

    expect(myBook.wordsPerPage()).toBe(200);
  });

  it('wordsPerPage returns error when no word is provided', () => {
  
    expect(() => myBook.wordsPerPage()).toThrow();
  });

});
