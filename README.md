# react-segmented-control

> Simple [React](http://facebook.github.io/react/index.html) component for a segmented control.

### [Demo](https://enki-com.github.io/react-segmented-control)

[![Demo](https://cdn.rawgit.com/enki-com/react-segmented-control/master/example/demo.gif "Demo")](https://github.com/enki-com/react-segmented-control/blob/master/example/index.html)

## Install

```bash
npm install react-segmented-control --save
```

or

```bash
bower install react-segmented-control --save
```

## Example

Controlled usage:

```javascript
var SegmentedControl = require('react-segmented-control');

var App = React.createClass({

  getInitialState() {
    return {
      color: 'red'
    };
  },
  render() {
    return (
      <div>
        <SegmentedControl 
          onChange={this.colorUpdated} 
          value={this.state.color}
          name="color">
          <span value="red">Red</span>
          <span value="blue">Blue</span>
        </SegmentedControl>
        <div className='background' style={{background: this.state.color}} />
      </div>
    );
  },
  
  colorUpdated(value) {
    this.setState({color: value});
  }
});
```

## API

### Props

All props are optional except `name`.

##### className

Class of the Component (in addition of `segmented-control`).

##### onChange

Function called when the control is changed (value will be passed as an argument).

##### defaultValue or value

Use defaultValue to specify an initial value. Use value to use this component as a controlled component.

##### name

Name of the input.

## Styles

Look at [react-segmented-control.css](https://github.com/enki-com/react-segmented-control/blob/master/react-segmented-control.css) for an idea on how to style this component.

---

MIT Licensed
