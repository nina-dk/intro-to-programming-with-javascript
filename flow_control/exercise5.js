let foo = () => console.log('foo');
let qux = () => console.log('qux');

// return foo() ? 'bar' : qux();

// Refactored

if (foo()) {
  return 'bar';
} else {
  return qux();
}