The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access the property.

```javascript
class MyComponent extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => this.setState({ userData: data }));
  }

  render() {
    return (
      <View>
        <Text>{this.state.userData?.name ?? 'Loading...'}</Text>
      </View>
    );
  }
}
```

`userData?.name` will safely return `undefined` if `userData` is null or undefined. The `?? 'Loading...'` then provides a fallback value, preventing the error.  Alternatively, you can use a conditional rendering technique to only display the user's name after the data has been fetched.