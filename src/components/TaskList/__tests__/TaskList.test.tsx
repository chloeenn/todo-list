import { render, screen } from '@testing-library/react';
import TaskList from '../index';
import { vi } from 'vitest';
import { TaskProvider } from '../../../context/TaskContext';

interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
    done: boolean;
}
const mockUseTasks = vi.fn();
vi.mock('../../../context/TaskContext', () => ({
    TaskProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    useTasks: () => mockUseTasks(),
}));
const NO_TASKS_MESSAGE = "No tasks to display";
describe('TaskList', () => {
    it(`renders ${NO_TASKS_MESSAGE} when the task list is empty`, () => {
        mockUseTasks.mockReturnValue({
            tasks: [] as Task[],
        });
        render(<TaskProvider><TaskList /></TaskProvider>);
        expect(screen.getByText(NO_TASKS_MESSAGE)).toBeInTheDocument();
    });

    it('renders TaskItem when tasks exist', () => {
        mockUseTasks.mockReturnValue({
            tasks: [
                { id: 1, title: 'Task 1', description: '', date: '', done: false },
                { id: 2, title: 'Task 2', description: '', date: '', done: false },
            ],
        });
        render(<TaskProvider><TaskList /></TaskProvider>);
        const textbox = screen.getAllByRole('textbox');
        expect(textbox).toHaveLength(2);
        expect(textbox[0]).toHaveValue('Task 1');
        expect(textbox[1]).toHaveValue('Task 2');
    });
});