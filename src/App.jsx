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

function BarrierMeasurement({isCircleBarrier, handleBarrierMeasurementChange}) {
    if(isCircleBarrier) {
        return (
            <StyledInputGroup>
                <label htmlFor={'barrierRadius'}>Barrier Radius (in feet):</label>
                <input type={"number"} id={'barrierRadius'}
                    onChange={handleBarrierMeasurementChange}/>
            </StyledInputGroup>
        )
    } else {
        return (
            <StyledInputGroup>
                <label htmlFor={'barrierLength'}>Barrier Length (in feet):</label>
                <input type={"number"} id={'barrierLength'}
                    onChange={handleBarrierMeasurementChange}/>
            </StyledInputGroup>
        )
    }
}

function App() {
    const [isCircleBarrier, setIsCircleBarrier] = useState(false);
    const [barrierMeasurement, setBarrierMeasurement] = useState(0);
    const [brickLength, setBrickLength] = useState(0);
    const [brickLayers, setBrickLayers] = useState(0);
    const handleBarrierTypeChange = (e) => {
        e.preventDefault();
        setIsCircleBarrier(e.target.value);
    };
    const handleBarrierMeasurementChange = (e) => {
        e.preventDefault();
        setBarrierMeasurement(parseInt(e.target.value));
    };
    const handleBrickLengthChange = (e) => {
        e.preventDefault();
        setBrickLength(e.target.value);
    };
    const handleBrickLayersChange = (e) => {
        e.preventDefault();
        setBrickLayers(e.target.value);
    };
    const calculateBricks = (e) => {
        e.preventDefault();
        console.log('fired')
        let barrierLengthInches;
        if(barrierMeasurement === 2) {
            console.log('got here')
        }
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
                handleBarrierMeasurementChange={handleBarrierMeasurementChange}/>
            <StyledInputGroup>
                <label htmlFor={'brickMeasurement'}>
                    Brick Length (in inches):
                </label>
                <input type={'number'} id={'brickMeasurement'}
                    onChange={handleBrickLengthChange}/>
            </StyledInputGroup>
            <StyledInputGroup>
                <label htmlFor={'brickLayers'}>How many layers?</label>
                <input type={'number'} id={'brickLayers'}
                    onChange={handleBrickLayersChange}/>
            </StyledInputGroup>
            <StyledSubmitButton onClick={calculateBricks}>Calculate Bricks!</StyledSubmitButton>
        </>
    )
}

export default App
