### Introducing JSX
- This is the first chapter in a step-by-step guide about main React concepts.

### Consider this variable declaration:
- It is called JSX

```
const element = <h1>Hello, world!</h1>;
```

### Embedding Expressions in JSX

```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);

You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or 
formatName(user) are all valid JavaScript expressions.

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);


JSX is an Expression Too

```

### JSX is an Expression Too
- This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### Specifying Attributes with JSX

```
const element = <img src={user.avatarUrl}></img>;
```

### JSX Prevents Injection Attacks
- https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks

```
const title = response.potentiallyMaliciousInput;
// This is safe:
const element = <h1>{title}</h1>;
```

-  Babel compiles JSX down to React.createElement() calls.

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```