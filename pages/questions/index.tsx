import styled from "styled-components";

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

export default function Questions() {
    return (
        <QuestionsContainer>
            <h2>Questions</h2>
        </QuestionsContainer>
    )
};