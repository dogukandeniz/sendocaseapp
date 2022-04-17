import React, { useEffect,useState } from "react";
import  { useDispatch } from "react-redux";
import {initSearchFilter, resetSearchFilter} from '../../_actions';
import './search.input.scss';


const SearchInput = props => {
    const [filter, setFilterVal] = useState("");
    const dispatch = useDispatch();

    function handleChange(evt) {
        let val = evt.target.value;
        setFilterVal(val);

      if(val.length > 2){
            setFilterVal(val)
            dispatch(initSearchFilter(val));
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
        console.log("search input comp useEffect")
    }, []);

    return (
        <div className="form-component-01">
            <img src={require('../../assets/img/icons8-search-32.png')} />
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