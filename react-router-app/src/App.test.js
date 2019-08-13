import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 뎁스1
// 뎁스2
// 뎁스3
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
