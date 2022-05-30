import React, { useState } from "react";
import { Button,ButtonGroup,Select } from "@chakra-ui/react";
const Pagination = ({page,setPage}) => { 

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" onClick={(page)=> setPage(page =1)} >First</Button>
      <Button data-cy="pagination-previous-button" disabled={page <= 1} onClick={ ()=>{if(page>1){setPage(page-1)}}} >Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button" onClick={(page)=> {setPage(page+1);console.log(12)}} >Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
