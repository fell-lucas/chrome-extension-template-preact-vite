import { render, screen } from '@testing-library/preact';
import Newtab from './Newtab';

describe('Newtab page', () => {
  it('should render the Newtab page', () => {
    render(<Newtab />);
    expect(screen.getByTestId('newtab_text').textContent).toEqual(
      'New tab page'
    );
  });
});
