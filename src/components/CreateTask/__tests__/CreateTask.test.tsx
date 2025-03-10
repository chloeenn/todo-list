import { render, screen, fireEvent } from '@testing-library/react';
import CreateTask from '../index';
import { TaskProvider } from '../../../context/TaskContext';
describe('CreateTask', () => {
  beforeEach(()=>{
    render(<TaskProvider><CreateTask/></TaskProvider>)
  })
  it('renders the create button', () => {
    const createButton = screen.getByRole('button', { name: /create new task/i });
    expect(createButton).toBeInTheDocument();
  });

  it('shows the form when the create button is clicked', () => {
    const createButton = screen.getByRole('button', { name: /create new task/i });
    fireEvent.click(createButton);
    expect(screen.getByPlaceholderText('Enter task name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Notes')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save changes/i })).toBeInTheDocument();
  })
});