- course video https://www.youtube.com/watch?v=4UZrsTqkcW4

### Hello World
- This is the first chapter in a step-by-step guide about main React concepts.

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```


### Introducing JSX
- This is the first chapter in a step-by-step guide about main React concepts.

```
Consider this variable declaration:
It is called JSX
const element = <h1>Hello, world!</h1>;

Embedding Expressions in JSX

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

```

