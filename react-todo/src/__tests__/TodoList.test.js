import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('renders a title', () => {
    render(<TodoList />);
    const title = screen.getByText(/todo list/i);
    expect(title).toBeInTheDocument();
  });
});
