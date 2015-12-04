;(function (root, factory) {
  if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(require("react"));
  } else if (typeof define === "function" && define.amd) {
    define(["react"], factory);
  } else {
    root.SegmentedControl = factory(root.React);
  }
})(this, function (React) {
  "use strict";

  var SegmentedControl = React.createClass({displayName: "SegmentedControl",
    propTypes: {
      className: React.PropTypes.string,
      onChange: React.PropTypes.func,
      defaultValue: React.PropTypes.string,
      value: React.PropTypes.string,
      name: React.PropTypes.string.isRequired
    },

    getInitialState: function() {
      return {
        selected: this.props.value || this.props.defaultValue || 0
      };
    },

    render: function() {
      return (
        React.createElement("div",
                {className: 'segmented-control ' + this.props.className},
          this.props.children.map(function(child, index) {
            var selected = (child.props || {}).value === this.state.selected ||
                            index === this.state.selected;
            return (
              React.createElement("div", {
                className: 'label' + (selected ? ' selected' : ''),
                key: "sc-" + this.props.name + index},
                React.createElement("input", {
                  type: "radio",
                  name: "sc-" + this.props.name,
                  id: "sc-" + this.props.name + index,
                  value: (child.props || {}).value || index,
                  checked: selected,
                  onChange: this.handleChange}),
                React.createElement("label", {
                  htmlFor: "sc-" + this.props.name + index},
                  child)
              )
            );
          }.bind(this)),
          React.createElement("div", {className: "clearFix"})
        )
      );
    },

    handleChange: function(e) {
      var index = e.currentTarget.value;
      this.setState({
        selected: index
      }, function() {
        if (this.props.onChange) {
          this.props.onChange(index);
        }
      }.bind(this));
    },

    componentDidMount: function() {
      if (!this.props.defaultValue && this.props.onChange) {
        this.props.onChange(this.state.selected);
      }
    },

    componentWillReceiveProps: function(nextProps) {
      if (nextProps.value || nextProps.defaultValue !== this.props.defaultValue) {
        this.setState({selected: nextProps.value || nextProps.defaultValue});
      }
    }
  });

  return SegmentedControl;
});
