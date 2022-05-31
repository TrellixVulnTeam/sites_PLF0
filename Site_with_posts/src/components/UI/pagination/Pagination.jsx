import React from 'react';
import {usePaging} from "../../../hooks/usePaging";

const Pagination = ({totalPages, page, changePage}) => {
    const pagesArray = usePaging(totalPages, page);
    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;