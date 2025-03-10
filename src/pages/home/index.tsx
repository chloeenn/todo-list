import React from "react";
import CreateTask from "../../components/CreateTask";
import * as Styled from "./styles";
import TaskList from "../../components/TaskList";

const Home: React.FC = () => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const formattedDate = currentDate.toLocaleDateString("en-US", options);
    const currentHour = currentDate.getHours();
    let greeting = "";
    if (currentHour < 12) greeting = "Good Morning";
    else if (currentHour >= 12 && currentHour < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening"
    return (
        <Styled.MainContainer>
            <Styled.GreetingContainer>
                <Styled.Greeting>
                    {greeting} ! 👋
                </Styled.Greeting>
                <Styled.DateText>Today, {formattedDate}</Styled.DateText>
            </Styled.GreetingContainer>
            <CreateTask />
            <TaskList />
        </Styled.MainContainer>
    );
};

export default Home;