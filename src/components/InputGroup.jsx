import styled from "styled-components";

const StyledInputGroup = styled.div`
    display: grid;
    grid-template-columns: max-content min-content;
    gap: 0.5rem;
    margin-block: 0.5rem;
`;

export const InputGroup = (props) => {
    return(
        <StyledInputGroup>
            {props.children}
        </StyledInputGroup>
    );
}