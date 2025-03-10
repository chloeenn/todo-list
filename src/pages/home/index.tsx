import React from "react";
import CreateTask from "../../components/CreateTask";
import * as Styled from "./styles";
import TaskList from "../../components/TaskList";
const Home: React.FC = () => {
    return (
        <Styled.MainContainer>
            <CreateTask />
            <TaskList />
        </Styled.MainContainer>
    );
};

export default Home;
