"use client"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { FC, ReactNode } from 'react';
import { oneProductType } from '../../utils/ProductsDataArrayAndType';
import Card from './Card';
import Slider from 'react-slick';
import {Component} from "react"


// const ProductCarousel:FC<{ProductData:Array<oneProductType>}> = ({ProductData})=> {
// 
//   return (
    
  //   <div className='flex gap-x-4 '>
        // {
        //     limitedProducts.map((item:oneProductType, index:number)=>(
        //         <div key={index}>
        //             <Card singleProductData={item}/>
        //         </div>
                
        //     ))
        // }
  //   </div>
  // )
// }
//export default ProductCarousel;


//const limitedProducts = ProductData.slice(0,4);
export default class ProductCarousel extends Component<{ProductData:Array<oneProductType>}>{
  
  render():ReactNode {
    const settings = {
      centerMode:false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          }
        },
        {
          breakpoint: 867,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          }
        }  
      ]
    };
    const limitedProducts = this.props.ProductData.slice(0,6);
    
    return (
      
      <div className="space-y-3">
            <div className="text-center space-y-3">
                <p className="text-blue-800 text-sm">PRODUCTS</p>
                <h3 className="text-3xl text-gray-800 font-bold">Check What We Have</h3>
            </div>
      <Slider {...settings} >
        
          {
              limitedProducts.map((item:oneProductType, index:number)=>(
                  <div key={index} className=" cursor-pointer space-x-4  mb-16 hover:scale-110 duration-300 flex justify-center items-center">
                      <Card singleProductData={item}/>
                  </div>
                  
              ))
          }
      </Slider>
    </div>
    );
 }
}
