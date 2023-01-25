import stringLength from './stringLength';

it('should check the length of "hello" and return 5', () => {
  expect(stringLength('hello')).toBe(5);
});

it('Should throw an error when we chech "hellorainbow"', () => {
  expect(() => stringLength('hellorainbow')).toThrow();
});
