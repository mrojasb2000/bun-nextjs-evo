import styled from "styled-components";

const CardWrapper = styled.div`
    text-align: left;
    padding: 1%;
    background: lightGray;
    border-radius: 5px;
    margin-botton: 2%;
`;

const Title = styled.h2`
    width: 100%;
    padding-botton; 10px;
    text-align: center;
    border-botton: 1px solid darkGray;
    color: black;
`;

const Count = styled.span`
    color: darkGray;
`;

export default function Card({ title, views, answers }){
    return (
        <CardWrapper>
            <Title>
                {title}
            </Title>
            <Count>
                {'Views: ${views} | Answers: ${answers}'}
            </Count>
        </CardWrapper>
    );
}