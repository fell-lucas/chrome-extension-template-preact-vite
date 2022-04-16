import { render, screen } from '@testing-library/preact';
import Devtools from './Devtools';

describe('Devtools page', () => {
  it('should render the Devtools page', () => {
    render(<Devtools />);
    expect(screen.getByTestId('devtools_text').textContent).toEqual(
      'Dev tools panel'
    );
  });
});
