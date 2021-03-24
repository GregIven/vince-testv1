import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 95%;
    min-height: 100%;
    margin: 2em;
    height: 100vh;
    position: absolute;
    justify-content: center;

    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';
`;

export const ColumnWrapper1 = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */

    flex-direction: column;
    grid-area: col1;

    margin: 10px;
`;

export const ColumnWrapper2 = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */

    flex-direction: column;
    grid-area: col2;

    margin: 10px;
`;

export const FormHeader = styled.h1`
    margin: 10px;
`

export const FormSubHeader = styled.h2`
    margin: 10px;
    font-size: 15px;
`

export const FormWrapper = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    /* margin: 10px; */
`;

// export const TextFieldForm = styled.form`
//     /* float: right; */
//     /* width: 49.99999%; */
// `;

export const QuoteFormInput = styled.input`
    padding: 1em;
    color: palevioletred;
    background: papayawhip;
    //TODO make the border of the input box square and not curved.
    border: 2px solid black;
    border-radius: 3px;
    width: 70ch;
    margin: 3px;
`;

export const FormSubmitBtn = styled.button`
    position: relative;
    margin: 30px;
    padding: 21px 35px;
    color: #fff;
    background-color: #6772e5;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0,0,0,0.08);
    
    &:hover {
        background-color: #5469d4;
    }
`;


export const  Disclaimer1 = styled.p`

`;

export const  Disclaimer2 = styled.p`

`;

export const HolidaysListed = styled.p`

`;

export const  HoursHeader = styled.h1`

`;

export const  HoursListed = styled.p`

`;

export const  ObservationHeader = styled.h1`

`;

export const  ObservationParagraph = styled.p`

`;