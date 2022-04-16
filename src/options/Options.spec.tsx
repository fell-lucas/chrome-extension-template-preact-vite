import { render, screen } from '@testing-library/preact';
import Options from './Options';

describe('Options page', () => {
  it('should render the Options page', () => {
    render(<Options />);
    expect(screen.getByTestId('options_text').textContent).toEqual(
      'Options page'
    );
  });
});
