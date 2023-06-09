import { useState } from 'react'
import styled from "styled-components";
import './App.css'

const StyledLabelGroup = styled.div`
    display: grid;
    grid-template-columns: max-content min-content;
    gap: 0.5rem;
`;

const StyledFieldSet = styled.fieldset`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 1rem;
    border: none;
`;

const StyledLegend = styled.legend`
    font-weight: 700;
    padding: 0;
`;

function App() {
    const [barrierType, setBarrierType] = useState("line");
    const handleBarrierTypeChange = (e) => {
        setBarrierType(e.target.value);
    }
    return (
        <>
            <h1>How Many Bricks?</h1>
            <StyledLabelGroup>
                <StyledFieldSet>
                    <StyledLegend>Barrier Type:</StyledLegend>
                    <div>
                        <input type={'radio'} value={'line'} id={'barrierTypeLine'} name={'barrierType'} checked={true}
                        onChange={handleBarrierTypeChange}/>
                        <label htmlFor={'barrierTypeLine'}>Line</label>
                    </div>
                    <div>
                        <input type={'radio'} value={'circle'} id={'barrierTypeCircle'} name={'barrierType'}
                        onChange={handleBarrierTypeChange}/>
                        <label htmlFor={'barrierTypeCircle'}>Circle</label>
                    </div>
                </StyledFieldSet>
            </StyledLabelGroup>
        </>
    )
}

export default App
