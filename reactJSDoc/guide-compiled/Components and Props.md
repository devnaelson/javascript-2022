###  Components and Props
- Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. 
- Function and Class Components

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- You can also use an ES6 class to define a component:

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
