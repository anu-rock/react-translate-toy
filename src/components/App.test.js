import React from 'react';
import { render, wait, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should display English text by default', async () => {
    render(<App />);

    expect(screen.getByTestId('label').textContent).toBe('Name');
    expect(screen.getByTestId('button').textContent).toBe('Submit');
  });

  it('should switch language correctly', async () => {
    render(<App />);

    const nlFlag = screen.getByTestId('flag-nl');
    fireEvent.click(nlFlag);

    await wait();

    expect(screen.getByTestId('label').textContent).toBe('Naam');
    expect(screen.getByTestId('button').textContent).toBe('Voorleggen');
  });

  it('should display red color by default', async () => {
    render(<App />);

    expect(screen.getByTestId('button').classList).toContain('red');
  });

  it('should switch color correctly', async () => {
    render(<App />);

    const colorBlue = screen.getByTestId('color-blue');
    fireEvent.click(colorBlue);

    await wait();

    expect(screen.getByTestId('button').classList).toContain('blue');
  });
});
