import { FC } from "react"
import Image from "next/image"
import { PreLoader } from "../../../../public"


const LoadingComp:FC<{size:string}> = ({size})=>{
    return (
        <div className={`${size}`}>
            <Image src={PreLoader} alt="Pre Loader"/>

        </div>
    )
}

export default LoadingComp;