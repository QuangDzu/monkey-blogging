import React from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  .pagination {
    &-list {
      display: flex;
      align-items: center;
      gap: 0 10px;
    }
    &-prev,
    &-next,
    &-item {
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      &:hover {
        color: white;
        background-color: ${(props) => props.theme.secondary};
      }
    }
    &-item.is-current {
      color: white;
      background-color: ${(props) => props.theme.secondary};
    }
  }
`;

const Pagination = () => {
  return <PaginationStyles></PaginationStyles>;
};

export default Pagination;
