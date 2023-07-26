import React from "react";
import MuiPagination, { PaginationProps } from "@mui/material/Pagination";
import styles from "./Pagination.module.scss";

export interface PaginationPropsType extends PaginationProps {
    setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationPropsType> = ({
    setPage,
    ...props
}) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };

    return (
        <MuiPagination
            className={styles.pagination}
            shape="rounded"
            onChange={handleChange}
            {...props}
        />
    );
};

export default Pagination;
