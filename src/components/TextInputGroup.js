import {InputGroup} from "./InputGroup.jsx";

export const TextInputGroup = ({ arr, callback }) => {
  return(
      <>
        <InputGroup>
            <label htmlFor={'bulkNum'}>Bulk Order Number:</label>
            <input type={'number'} id={'bulkNum'}
                onChange={(e) => inputChangeHandler(e, setBulkNum)}/>
        </InputGroup>
        <InputGroup>
            <label htmlFor={'bulkPrice'}>Bulk Price:</label>
            <input type={'number'} id={'bulkPrice'}
                onChange={(e) => inputChangeHandler(e, setBulkPrice)}/>
        </InputGroup>
      </>
  );
};