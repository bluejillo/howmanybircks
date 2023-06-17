import { useState } from 'react'
import styled from "styled-components";
import './App.css'

//to do disable pricing if number of bricks haven't been calculated

const StyledInputGroup = styled.div`
    display: grid;
    grid-template-columns: max-content min-content;
    gap: 0.5rem;
    margin-block: 0.5rem;
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
    padding-block: 0.5rem;
    padding-inline: 1rem;
    margin-block: 1rem;
    
    cursor: pointer;
    
    &:hover {
        background-color: #FFF;
        color: #262626;
    }
`;

const CalculatedDisplay = styled.div`
    font-weight: 600;
    font-size: 1.3rem;
    margin-block: 1.5rem;
    margin-inline: 3rem;
`;

const CalculatedNumSpan = styled.span`
    font-size: 2rem;
`;

function CalculatedBricks({calculatedBrickNum}) {
    if(calculatedBrickNum > 0) {
        return(
            <CalculatedDisplay>
                <CalculatedNumSpan>{calculatedBrickNum}</CalculatedNumSpan>
                <span> Bricks needed!</span>
            </CalculatedDisplay>
        );
    }
}

function BulkOrder({isBulkPricing, inputChangeHandler, setBulkNum, setBulkPrice}) {
    if(isBulkPricing) {
        return(
            <>
                <StyledInputGroup>
                    <label htmlFor={'bulkNum'}>Bulk Order Number:</label>
                    <input type={'number'} id={'bulkNum'}
                        onChange={(e) => inputChangeHandler(e, setBulkNum)}/>
                </StyledInputGroup>
                <StyledInputGroup>
                    <label htmlFor={'bulkPrice'}>Bulk Price:</label>
                    <input type={'number'} id={'bulkPrice'}
                        onChange={(e) => inputChangeHandler(e, setBulkPrice)}/>
                </StyledInputGroup>
            </>
        );
    }
}

function CalculatedPrice({calculatedPrice}) {
    if(calculatedPrice > 0) {
        return(
            <CalculatedDisplay>
                <span>Total Cost: </span>
                <CalculatedNumSpan>${calculatedPrice}</CalculatedNumSpan>
            </CalculatedDisplay>
            )
    }
}

function App() {
    const [isCircleBarrier, setIsCircleBarrier] = useState(false);
    const [barrierMeasurement, setBarrierMeasurement] = useState(0);
    const [brickLength, setBrickLength] = useState(0);
    const [brickLayers, setBrickLayers] = useState(0);
    const [calculatedBrickNum, setCalculatedBrickNum] = useState(0);
    const [isBulkPricing, setIsBulkPricing] = useState(false);
    const [bulkNum, setBulkNum] = useState(0);
    const [bulkBrickPrice, setBulkBrickPrice] = useState(0);
    const [regularBrickPrice, setRegularBrickPrice] = useState(0);
    const [calculatedBrickPrice, setCalculatedBrickPrice] = useState(0);
    const handleRadioInputChange = (e, callback) => {
        e.preventDefault();
        callback(e.target.value);
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
    const getPrice = (e) => {
        e.preventDefault();
        let calculatedPrice = calculateRegularBrickPrice();

        if(isBulkPricing) {
            calculatedPrice = calculateBulkPrice() + calculatedPrice;
        }
        setCalculatedBrickPrice(calculatedPrice.toFixed(2));
    }
    const calculateBulkPrice = () => {
        let bulkBricks = Math.floor((calculatedBrickNum / bulkNum));
        return bulkBricks > 0 ? bulkBricks * bulkBrickPrice : 0;
    }

    const calculateRegularBrickPrice = () => {
        let remainingBricks = ((calculatedBrickNum / bulkNum) % 1) * 100;
        return remainingBricks > 0 ? remainingBricks * regularBrickPrice : 0;
    }
    return (
        <>
            <h1>How Many Bricks?</h1>
            <StyledInputGroup>
                <StyledFieldSet>
                    <StyledLegend>Is it a circle?</StyledLegend>
                    <div>
                        <input type={'radio'} value={false} id={'barrierTypeLine'} name={'barrierType'} checked={true}
                        onChange={(e) => handleRadioInputChange(e, setIsCircleBarrier)}/>
                        <label htmlFor={'barrierTypeLine'}>No</label>
                    </div>
                    <div>
                        <input type={'radio'} value={true} id={'barrierTypeCircle'} name={'barrierType'}
                        onChange={(e) => handleRadioInputChange(e, setIsCircleBarrier)}/>
                        <label htmlFor={'barrierTypeCircle'}>Yes</label>
                    </div>
                </StyledFieldSet>
            </StyledInputGroup>
            <StyledInputGroup>
                <label htmlFor={'barrierLength'}>Barrier {isCircleBarrier ? 'Diameter' : 'Length'} (in feet):</label>
                <input type={"number"} id={'barrierLength'}
                    onChange={(e) => handleTextInputChange(e, setBarrierMeasurement)}/>
            </StyledInputGroup>
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
            <StyledSubmitButton onClick={calculateBricks}>Calculate Bricks</StyledSubmitButton>
            <CalculatedBricks calculatedBrickNum={calculatedBrickNum}/>
            <h2>Pricing</h2>
            <StyledInputGroup>
                <StyledFieldSet>
                    <StyledLegend>Is there a bulk price?</StyledLegend>
                    <div>
                        <input type={'radio'} value={false} id={'bulkNo'} name={'bulkPricing'} checked={true}
                        onChange={(e) => handleRadioInputChange(e, setIsBulkPricing)}/>
                        <label htmlFor={'bulkNo'}>No</label>
                    </div>
                    <div>
                        <input type={'radio'} value={true} id={'bulkYes'} name={'bulkPricing'}
                        onChange={(e) => handleRadioInputChange(e, setIsBulkPricing)}/>
                        <label htmlFor={'bulkYes'}>Yes</label>
                    </div>
                </StyledFieldSet>
            </StyledInputGroup>
            <BulkOrder
                isBulkPricing={isBulkPricing}
                inputChangeHandler={handleRadioInputChange}
                setBulkNum={setBulkNum}
                setBulkPrice={setBulkBrickPrice}/>
            <StyledInputGroup>
                <label htmlFor={'brickPrice'}>Price:</label>
                <input type={'number'} id={'brickPrice'}
                    onChange={(e) => handleTextInputChange(e, setRegularBrickPrice)}/>
            </StyledInputGroup>
            <StyledSubmitButton onClick={getPrice}>Calculate Price</StyledSubmitButton>
            <CalculatedPrice calculatedPrice={calculatedBrickPrice}/>
        </>
    )
}

export default App
