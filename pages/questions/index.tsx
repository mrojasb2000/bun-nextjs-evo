import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../../components/Card";

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

export default function Questions() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const data = await fetch('https://api.stackexchange.com/2.2/questions?order=desc&sort=hot&tagged=reactjs&site=stackoverflow');
    //             const result = data.json();
    //             console.log("Items: ", data);
                
    //             if(result){
    //                 setQuestions(result.items);
    //                 setLoading(false);
    //             }
    //         } catch(e){
    //             console.log('Error: ', e);
    //         }
    //     }
    //     fetchData();
    // }, []);

    return (
        <QuestionsContainer>
            <h2>Questions</h2>
        </QuestionsContainer>
    )
};