import { CalculatedDisplay } from "./CalculatedDisplay.jsx";
import { CalculatedNumSpan } from "./CalculatedNumSpan.jsx";

export const CalculatedPrice = ({ calculatedPrice }) => {
    return (
        <CalculatedDisplay>
            <span>Total Cost: </span>
            <CalculatedNumSpan>${calculatedPrice}</CalculatedNumSpan>
        </CalculatedDisplay>
    )
}