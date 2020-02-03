function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Input extends React.Component {
  render() {
    const { onChangeInput, value } = this.props;
    return React.createElement("input", { value: value, onChange: onChangeInput });
  }}

class Slider extends React.Component {
  render() {
    const { onChangeInput, value } = this.props;
    return (
      React.createElement("input", {
        type: "range",
        min: "1",
        max: "100",
        value: value,
        onChange: onChangeInput,
        id: "myRange" }));


  }}


class Dropdown extends React.Component {
  buildOptions() {
    var arr = [];
    for (let i = 1; i <= 100; i++) {
      arr.push(React.createElement("option", { key: i, value: i }, i));
    }
    return arr;
  }
  render() {
    const { onChangeInput, value } = this.props;

    return (
      React.createElement("select", { value: value, onChange: onChangeInput },
      this.buildOptions()));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "onChangeInput",


    e => {
      this.setState({ value: e.target.value });
    });this.state = { value: 0 };}
  render() {
    const { value } = this.state;
    return (
      React.createElement("div", null,
      React.createElement("h2", null, "Controlled Component"),
      React.createElement("div", { className: "container" },
      React.createElement(Input, { onChangeInput: this.onChangeInput, value: value }),
      React.createElement(Slider, { onChangeInput: this.onChangeInput, value: value }),
      React.createElement(Dropdown, { onChangeInput: this.onChangeInput, value: value }))));



  }}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));