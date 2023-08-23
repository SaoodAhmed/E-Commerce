
import { client } from "../../../../sanity/lib/client";



import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "@/app/Componet01/utils/ProductsDataArrayAndType";

export async function GET(request: NextRequest) {
    const orignalData: Array<oneProductType> = [];
    const url = request.nextUrl.searchParams; // to create url 

    let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-07-17/data/query/production?query=*[_type == "product"]`);
    let dataFrom_APi = await res.json();
    orignalData.push(...dataFrom_APi.result)

    if (url.has("start") || url.has("end")) {
        if (orignalData[Number(url.get("start"))]) { // at this index value exists or not
            let productArray = orignalData.slice(Number(url.get("start")), Number(url.get("end"))) // user give start and end slice index from array nd it fetch data in partcular range
            return NextResponse.json({ productArray })
        }
        return NextResponse.json({ productArray: "Not found" })

    }

    return NextResponse.json({ orignalData })
};




        // let response = await client.fetch(`*[_type == "products"]`);
        // return NextResponse.json({ response })