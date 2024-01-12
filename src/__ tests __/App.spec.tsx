import App from '@/App';
import { render } from '@testing-library/react';

describe('App.tsx', () => {
  test('Renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
