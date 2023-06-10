import { useState } from 'react'
import styled from "styled-components";
import './App.css'

const StyledInputGroup = styled.div`
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

const StyledSubmitButton = styled.button`
    border: none;
    background-color: #262626;
    color: #FFF;
    font-weight: 700;
    padding: 0.5rem 1rem;
    cursor: pointer;
    
    &:hover {
        background-color: #FFF;
        color: #262626;
    }
`;

const CalculatedBrickDisplay = styled.div`
    font-weight: 600;
    font-size: 1.3rem;
    margin-block-start: 1.5rem;
`;

const CalculatedBrickSpan = styled.span`
    font-size: 2rem;
`;

//does not need to be a function
function BarrierMeasurement({isCircleBarrier, handleTextInputChange, setBarrierMeasurement}) {
    if(isCircleBarrier) {
        return (
            <StyledInputGroup>
                <label htmlFor={'barrierDiameter'}>Barrier Diameter (in feet):</label>
                <input type={"number"} id={'barrierDiameter'}
                    onChange={(e) => handleTextInputChange(e, setBarrierMeasurement)}/>
            </StyledInputGroup>
        )
    } else {
        return (
            <StyledInputGroup>
                <label htmlFor={'barrierLength'}>Barrier Length (in feet):</label>
                <input type={"number"} id={'barrierLength'}
                    onChange={(e) => handleTextInputChange(e, setBarrierMeasurement)}/>
            </StyledInputGroup>
        )
    }
}

function CalculatedBricks({calculatedBrickNum}) {
    if(calculatedBrickNum > 0) {
        return(
            <CalculatedBrickDisplay>
                <CalculatedBrickSpan>{calculatedBrickNum}</CalculatedBrickSpan>
                <span> Bricks needed!</span>
            </CalculatedBrickDisplay>
        );
    }
}

function App() {
    const [isCircleBarrier, setIsCircleBarrier] = useState(false);
    const [barrierMeasurement, setBarrierMeasurement] = useState(0);
    const [brickLength, setBrickLength] = useState(0);
    const [brickLayers, setBrickLayers] = useState(0);
    const [calculatedBrickNum, setCalculatedBrickNum] = useState(0);
    const handleBarrierTypeChange = (e) => {
        e.preventDefault();
        setIsCircleBarrier(e.target.value);
    };
    const handleTextInputChange = (e, callback) => {
        e.preventDefault();
        callback(parseInt(e.target.value));
    }
    const calculateBricks = (e) => {
        e.preventDefault();
        let barrierLengthInches = barrierMeasurement * 12 * brickLayers;
        if(isCircleBarrier) {
            barrierLengthInches = Math.PI.toFixed(3) * barrierLengthInches;
        }
        setCalculatedBrickNum(Math.ceil(barrierLengthInches / brickLength));
    };
    return (
        <>
            <h1>How Many Bricks?</h1>
            <StyledInputGroup>
                <StyledFieldSet>
                    <StyledLegend>Is it a circle?</StyledLegend>
                    <div>
                        <input type={'radio'} value={false} id={'barrierTypeLine'} name={'barrierType'} checked={true}
                        onChange={handleBarrierTypeChange}/>
                        <label htmlFor={'barrierTypeLine'}>No</label>
                    </div>
                    <div>
                        <input type={'radio'} value={true} id={'barrierTypeCircle'} name={'barrierType'}
                        onChange={handleBarrierTypeChange}/>
                        <label htmlFor={'barrierTypeCircle'}>Yes</label>
                    </div>
                </StyledFieldSet>
            </StyledInputGroup>
            <BarrierMeasurement isCircleBarrier={isCircleBarrier}
                handleTextInputChange={handleTextInputChange}
                setBarrierMeasurement={setBarrierMeasurement}/>
            <StyledInputGroup>
                <label htmlFor={'brickMeasurement'}>
                    Brick Length (in inches):
                </label>
                <input type={'number'} id={'brickMeasurement'}
                    onChange={(e) => handleTextInputChange(e, setBrickLength)}/>
            </StyledInputGroup>
            <StyledInputGroup>
                <label htmlFor={'brickLayers'}>How many layers?</label>
                <input type={'number'} id={'brickLayers'}
                    onChange={(e) => handleTextInputChange(e, setBrickLayers)}/>
            </StyledInputGroup>
            <StyledSubmitButton onClick={calculateBricks}>Calculate Bricks!</StyledSubmitButton>
            <CalculatedBricks calculatedBrickNum={calculatedBrickNum}/>
        </>
    )
}

export default App
