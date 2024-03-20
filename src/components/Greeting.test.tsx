/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

describe('Greeting', () => {
  it('renders the user name from local storage', () => {
    // Arrange
    const name = 'John Doe';
    localStorage.setItem('name', name);

    // Act
    render(<Greeting />);

    // Assert
    expect(screen.getByText(`${name.split(' ')[0]}`)).toBeInTheDocument();
  });

  it('renders the count', () => {
    // Arrange
    render(<Greeting />);

    // Assert
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
