import { type ComponentChild, render } from 'preact';
import './styles/index.css';

export const initElement = (elem: ComponentChild) => {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find AppContainer');
  }
  render(elem, appContainer);
};
