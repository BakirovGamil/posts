import { useMemo } from "react";
import { getPagesArray } from "../libs/pages";

export default function usePaginations(totalPages) {
    const pagesArray = useMemo(() => {
		return getPagesArray(totalPages);
	}, [totalPages]);

    return pagesArray;
}