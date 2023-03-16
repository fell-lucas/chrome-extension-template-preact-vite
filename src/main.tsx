import { JSX, render } from 'preact';
import './styles/index.css';

export const initElement = (elem: JSX.Element) => {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find AppContainer');
  }
  render(elem, appContainer);
};
