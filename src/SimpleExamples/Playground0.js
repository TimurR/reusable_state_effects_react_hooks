import React, {useState, Component } from "react";

export default class Playground0 extends Component {
  constructor(...args) {
    super(...args);
    this.state = { text: "", checked: false };
  }
  render() {
    const { text, checked } = this.state;
    return (
      <section>
        <input
          type="text"
          value={text}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={e => this.setState({ checked: e.target.checked })}
        />
        <ul>
          <li>{text}</li>
          <li>{checked.toString()}</li>
        </ul>
      </section>
    );
  }
}

export function PlaygroundX() {
  const [text, setText] = useState("");
  const [checkout, setCheckout] = useState(false);
  const handleCheckboxToggle = e => setCheckout(prevCheckout => !prevCheckout);
  return (
    <section>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <input type="checkbox" checked={checkout} onChange={handleCheckboxToggle} />
      <ul>
        <li>{text}</li>
        <li>{checkout.toString()}</li>
      </ul>
    </section>
  );
}
