import styled from "styled-components";

const CalculatedNumSpanStyle = styled.span`
    font-size: 2rem;
`;

export const CalculatedNumSpan = ({ children }) => {
    return(
        <CalculatedNumSpanStyle>
            {children}
        </CalculatedNumSpanStyle>
    );
}