// src/components/TaskItem.tsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { RemoveIcon } from '../icons/RemoveIcon';
import { CheckIcon } from '../icons/CheckIcon';
import * as Styled from './styles';
import { DELETE_TASK } from '../../graphql/mutations/deleteTask';
import { UPDATE_TASK } from '../../graphql/mutations/updateTask';
import { GET_TASKS, GET_COMPLETED_TASKS } from '../../graphql/queries/taskQueries';
import { Task } from '../../types/Task.types';

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const [editedTask, setEditedTask] = useState<Task | null>(null);

    const [deleteTask] = useMutation(DELETE_TASK, {
        variables: { id: Number(task.id) },
        refetchQueries: [
            { query: GET_TASKS },
            { query: GET_COMPLETED_TASKS },
        ],
        onError: (err) => console.error('Delete Task Error:', err.message),
    });

    const [updateTask] = useMutation(UPDATE_TASK, {
        refetchQueries: [
            { query: GET_TASKS },
            { query: GET_COMPLETED_TASKS },
        ],
        onError: (err) => console.error('Update Task Error:', err.message),
    });

    const handleEditChange = (
        id: number,
        value: string,
        field: 'title' | 'description' | 'date'
    ) => {
        setEditedTask((prevTask) => {
            if (prevTask && prevTask.id === id) return { ...prevTask, [field]: value };
            return { id, title: task.title, description: task.description, date: task.date, done: task.done, [field]: value };
        });
    };
    const handleSaveEdit = () => {
        if (!editedTask || editedTask.id !== task.id) return;

        const newTitle = editedTask.title.trim() === '' ? task.title : editedTask.title;
        const newDescription = editedTask.description ?? task.description;
        const newDate = editedTask.date ?? task.date;

        updateTask({
            variables: {
                id: Number(task.id),
                title: newTitle,
                description: newDescription,
                date: newDate,
            },
        }).catch((err) => console.error('Edit Mutation Error:', err.message));
    };

    const handleToggleComplete = () => {
        updateTask({
            variables: {
                id: Number(task.id),
                done: !task.done,
            },
        }).catch((err) => console.error('Toggle Complete Error:', err.message));
    };

    const handleDelete = () => {
        deleteTask().catch((err) => console.error('Delete Mutation Error:', err.message));
    };

    return (
        <Styled.TaskItem $completed={task.done}>
            <Styled.CheckBoxContainer
                onClick={handleToggleComplete}
                data-testid="complete-task"
                $completed={task.done}
            >
                {task.done && <CheckIcon />}
            </Styled.CheckBoxContainer>

            <Styled.TaskContent>
                <Styled.TaskInput
                    type="text"
                    value={editedTask?.id === task.id ? editedTask.title : task.title || `Task ${task.id}`}
                    onChange={(e) => handleEditChange(task.id, e.target.value, 'title')}
                    onBlur={handleSaveEdit}
                    $completed={task.done}
                />
                {task.description && (
                    <Styled.TaskDescription>{task.description}</Styled.TaskDescription>
                )}

            </Styled.TaskContent>

            <Styled.TaskDate
                type="date"
                value={editedTask?.id === task.id ? editedTask.date || '' : task.date || ''}
                onChange={(e) => handleEditChange(task.id, e.target.value, 'date')}
                onBlur={handleSaveEdit}
            />

            <Styled.DeleteButton onClick={handleDelete} data-testid="delete-task">
                <RemoveIcon />
            </Styled.DeleteButton>
        </Styled.TaskItem>
    );
};

export default TaskItem;