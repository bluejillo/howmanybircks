import { CalculatedDisplay } from "./CalculatedDisplay.jsx";
import { CalculatedNumSpan } from "./CalculatedNumSpan.jsx";

export const CalculatedBricks = ({ calculatedBrickNum }) => {
    return(
        <CalculatedDisplay>
            <CalculatedNumSpan>{calculatedBrickNum}</CalculatedNumSpan>
            <span> Bricks needed!</span>
        </CalculatedDisplay>
    );
};