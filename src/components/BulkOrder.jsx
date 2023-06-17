import {InputGroup} from "./InputGroup.jsx";

export const BulkOrder = ({ setBulkNum, setBulkPrice }) => {
    const changeHandler = (e, callback) => {
        callback(e.target.value);
    }
    return(
        <>
            <InputGroup>
                <label htmlFor={'bulkNum'}>Bulk Order Number:</label>
                <input type={'number'} id={'bulkNum'}
                    onChange={(e) => changeHandler(e, setBulkNum)}/>
            </InputGroup>
            <InputGroup>
                <label htmlFor={'bulkPrice'}>Bulk Price:</label>
                <input type={'number'} id={'bulkPrice'}
                    onChange={(e) => changeHandler(e, setBulkPrice)}/>
            </InputGroup>
        </>
    );
};