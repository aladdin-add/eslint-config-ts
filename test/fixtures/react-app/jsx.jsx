import ReactDOM from 'react-dom';
import React from 'react';

class HelloMessage extends React.Component {
  render() {
    const name = 'nicholas';
    return <div>Hello {name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('container')
);
