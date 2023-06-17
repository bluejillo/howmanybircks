import styled from "styled-components";

const CalculatedDisplayStyle = styled.div`
    font-weight: 600;
    font-size: 1.3rem;
    margin-block: 1.5rem;
    margin-inline: 3rem;
`;

export const CalculatedDisplay = ({ children }) => {
    return (
        <CalculatedDisplayStyle>{children}</CalculatedDisplayStyle>
    )
}