import usePaginations from "../../../hooks/usePaginations";
import MyButton from "../button/MyButton";

function Pagination({page, totalPages, changePage}) {
	const pagesArray = usePaginations(totalPages);

    return (
        <div className="page-pagination">
            {pagesArray.map(numbPage => {
                return (
                    <MyButton 
                        id={(numbPage === page) ? "page-btn_active" : ""} 
                        key={numbPage} onClick={() => changePage(numbPage)}
                    >
                        {numbPage}
                    </MyButton>
                );
            })}
        </div>
    );
}

export default Pagination;