import { render, screen } from '@testing-library/preact';
import Popup from './Popup';

describe('Popup page', () => {
  it('should render the Pop Up page', () => {
    render(<Popup />);
    expect(screen.getByTestId('popup_text').textContent).toEqual('Pop up page');
  });
});
