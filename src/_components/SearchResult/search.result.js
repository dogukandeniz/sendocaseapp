import React, { useEffect } from "react";
import './search.result.scss';
import { useSelector } from 'react-redux'


const SearchResult = props => {

    useEffect(() => {
        console.log("search result comp useEffect")
    }, []);
    const searchState = useSelector(state => state.search)

    return (

        <div className="search-result-container">

            {

                searchState.fetched && searchState.items.map((item) => (

                    <div className="c-content-item" key={item._id}>
                        <div className="c-title">
                            {item.name}
                        </div>
                        <div className="c-subtitle">
                            <div className="c-subtitle-01">
                                {item.phone}
                            </div>
                            <div className="c-subtitle-01">
                                @{item.email}
                            </div>
                            <div className="c-subtitle-01">
                                {item.policyNo}
                            </div>
                        </div>
                    </div>

                ))
            }


        </div>

    );
};

export default SearchResult;