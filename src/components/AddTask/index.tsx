import React, { useState } from "react";
import Add from "../../assets/img/plus.svg"
import Calendar from "../../assets/img/calendar.svg"
import * as Styled from "./styles";

interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
    done: boolean;
}
const AddTask: React.FC = () => {
    const [title, setTitle] = useState("");
   
    return (
        <Styled.Container>
            {/* Add New Task */}
            <Styled.Input type="text" placeholder="Add New Task" value={title} onChange={(e) => setTitle(e.target.value)} />
            
        </Styled.Container>
    );
};

export default AddTask;
