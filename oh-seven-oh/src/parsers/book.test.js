import parser from './book';
import range from '../utils/range';

console.log(parser);
console.log(range);

const generateFakeBook = (n) => ({title: `Hello ${n}`, author: 'Who Ever'});

it('should parse the book', () => {
  for(let n in range(10)) {
    expect(parser(generateFakeBook(n))).toEqual({title: '', author: ''});
  }
});
