import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import TaskItem from "../index";
import { useTasks } from "../../../context/TaskContext";

vi.mock("../../../context/TaskContext", () => ({
    TaskProvider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    useTasks: vi.fn(),
}));

describe("TaskItem", () => {
    const mockDeleteTask = vi.fn();
    const mockEditTask = vi.fn();
    const mockCompleteTask = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useTasks as unknown as jest.Mock).mockReturnValue({
            deleteTask: mockDeleteTask,
            editTask: mockEditTask,
            completeTask: mockCompleteTask,
        });
    });

    const task = {
        id: 1,
        title: "Task 1",
        date: "2025-03-15",
        done: false,
    };

    it("renders the task", () => {
        render(<TaskItem task={task} />);

        expect(screen.getByRole("textbox")).toHaveValue("Task 1");
        expect(screen.getByDisplayValue("2025-03-15")).toBeInTheDocument();
    });

    it("allows editing the task title", () => {
        render(<TaskItem task={task} />);

        const textbox = screen.getByRole("textbox");
        fireEvent.change(textbox, { target: { value: "Updated Task" } });
        fireEvent.blur(textbox);

        expect(mockEditTask).toHaveBeenCalledWith(1, "Updated Task", undefined, "2025-03-15");
    });

    it("allows editing the task date", () => {
        render(<TaskItem task={task} />);

        const dateInput = screen.getByDisplayValue("2025-03-15");
        fireEvent.change(dateInput, { target: { value: "2025-03-20" } });
        fireEvent.blur(dateInput);

        expect(mockEditTask).toHaveBeenCalledWith(1, "Task 1", undefined, "2025-03-20");
    });

    it("marks the task as complete", () => {
        render(<TaskItem task={task} />);
        const checkbox = screen.getByTestId("complete-task");
        fireEvent.click(checkbox);

        expect(mockCompleteTask).toHaveBeenCalledWith(1);
    });

    it("deletes the task", () => {
        render(<TaskItem task={task} />);

        const deleteButton = screen.getByTestId("delete-task");
        fireEvent.click(deleteButton);

        expect(mockDeleteTask).toHaveBeenCalledWith(1);
    });
});
