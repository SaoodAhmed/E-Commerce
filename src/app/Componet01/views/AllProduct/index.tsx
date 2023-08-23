"use client"

import { Component, ReactNode } from "react";
import { oneProductType } from "../../utils/ProductsDataArrayAndType";
import BASE_PATH_FOR_API from "../../shared/BasePath";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../ProductCarousel/Card";
import LoadingComp from "../../shared/LoadingComp";

interface propsType {
    productArray:Array<oneProductType>
}

export default class AllProductComponent extends Component<{ProductData:propsType}>{

    start: number = 10;
    end: number = 20;
    state: { items: Array<oneProductType>, hasMore: boolean } = {
        items: [...this.props.ProductData.productArray],
        hasMore: true,
    }
    

    fetchDataFromApiGradually = async (start: number, end: number) => {
        const res = await fetch(`/api/products?start=${start}&end=${end}`);
        const dataToCheckAndSend = await res.json();
        if (dataToCheckAndSend.productArray === "Not found") {
            this.setState({ hasMore: false })
        }
        return dataToCheckAndSend;
    }
    
    getData = async () => {
        let allTogether = await this.fetchDataFromApiGradually(this.start, this.end);
        if (allTogether.productArray !== "Not found") {
            this.setState({
                items: this.state.items.concat(allTogether.productArray)
            })
        } else {
            this.setState({
                hasMore: false
            })
        }
        this.start = this.start + 10;
        this.end = this.end + 10;
    }
    

    render(){
        
        return (
            <InfiniteScroll
                dataLength={this.state.items.length} //This is important field to render the next data
                next={this.getData}
                hasMore={this.state.hasMore}
                loader={ <div className="flex mt-10 mb-24  justify-center items-center"><LoadingComp size={"w-10"}/></div>}
                endMessage={
                    <p className="mt-10 mb-24 text-xl text-slate-700" style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }>
                    <div className="flex flex-wrap justify-center md:justify-start ml-4 py-10 ">
                        {this.state.items.map((item: oneProductType, index: number) => (
                            <div key={index} className="">
                                <Card key={index} singleProductData={item} />

                            </div>
                        ))}
                    </div>
                    

            </InfiniteScroll>
            
        )
    
    }
}