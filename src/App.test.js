import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o título do quiz de cultura', () => {
  render(<App />);
  const titleElement = screen.getByText(/Quiz de Cultura Japonesa/i);
  expect(titleElement).toBeInTheDocument();
});
