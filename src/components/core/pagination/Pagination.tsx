/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/function-component-definition */
import classNames from "classnames";
import React from "react";
// import Lottie from "lottie-react";
import styles from "./pagination.module.css";
// import prevs from "../../../assests/animation/prev.json";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPreviousPage
}) => {
  return (
    <div className={classNames(styles.button_section_main, "center")}>
      <div className={classNames(styles.button_section, "flex", "center")}>
        <button
          type="button"
          onClick={onPreviousPage}
          className={classNames(styles.previous_button)}
          disabled={currentPage === 1}>
          {/* <Lottie style={style} animationData={prevs} /> */}
          Prevoius
        </button>
        <div className={classNames(styles.span_content, "center")}>
          <span className={classNames(styles.span_content_items, "center")}>
            {/* Page{" "} */}
            <span className={classNames(styles.span_current_page)}>
              {" "}
              {currentPage}
            </span>{" "}
            to
            <span className={classNames(styles.span_current_page)}>
              {" "}
              {totalPages}
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={onNextPage}
          className={classNames(styles.next_button)}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
