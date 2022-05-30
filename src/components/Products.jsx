import React,{useState} from "react";
import Pagination from "./Pagination";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { Flex,Grid } from "@chakra-ui/react";

import styles from './Product.module.css'

const Products = () => {
  const [page,setPage] = useState(1)

  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex className={styles.flexBox}>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid >{/* List of Products */}
      <Product page={page}/>
      </Grid>
      {/* Pagination */}
    <Pagination page={page} setPage={setPage}/>
    </Flex>
  );
};

 
export default Products;