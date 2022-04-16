import React, { useEffect,useState } from "react";
import  { useDispatch } from "react-redux";
import {getFilteredResult, resetSearchFilter} from '../../_actions';
import './search.input.scss';


const SearchInput = props => {
    const [filter, setFilterVal] = useState("");
    const dispatch = useDispatch();

    function handleChange(evt) {
        let val = evt.target.value;
        setFilterVal(val);

      if(val.length > 2){
            setFilterVal(val)
            dispatch(getFilteredResult(val));
        }
      else {
          dispatch(resetSearchFilter());
      }
    }

    const {
        id,
        placeholder,
    } = props;

    useEffect(() => {

    }, []);

    return (
        <div className="form-component-01">
            <img src={require('../../assets/img/MagnifyingGlass.png')} />
            <input
                id={id}
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default SearchInput;