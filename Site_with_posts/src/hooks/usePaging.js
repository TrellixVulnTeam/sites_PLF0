import {useMemo} from "react";
import {getPagesArray} from "../utils/pages";

export const usePaging = (totalPages, page) => {
    const pagesArray = useMemo(() => {
        return getPagesArray(totalPages)
    }, [totalPages, page])

    return pagesArray;
}