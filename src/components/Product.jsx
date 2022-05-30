import React, { useState,useEffect } from "react";
import {Text,Image,Box,Stack,Heading,Tag,TagLabel} from '@chakra-ui/react'
import axios from 'axios'
import styles from './Product.module.css'


const Product = (props) => { 

  const [data,setData]=useState([])

  useEffect(()=>{
    const getData = async ()=>{
        let r = await axios.get(`http://localhost:8080/products?_page=${props.page}&_limit=6`);
        console.log(r)
        
        setData(r.data);
        
    }
    getData()
},[])


console.log(data)

  return (
    <div className={styles.product}>
    {
      data.map((elem)=>(
        <div  className="innerP">

        <Stack data-cy="product">
      <Image data-cy="product-image" src={elem.imageSrc}/>
      <Text data-cy="product-category">
        {elem.category}
      </Text>
      <Tag>
        <TagLabel data-cy="product-gender">{elem.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{elem.title}</Heading>
      <Box data-cy="product-price">{elem.price}</Box>
    </Stack>
        </div>
      ))
    }
    </div>
  );
};

export default Product;
