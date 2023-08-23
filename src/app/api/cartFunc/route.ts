import {  db, drizzleCartTable } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    let url = req.nextUrl.searchParams;
    try {
        if (url.has("user_id")) {
            let cartData = await db.select().from(drizzleCartTable).where(eq(drizzleCartTable.user_id, (url.get("user_id") as string)));
            return NextResponse.json({ cartData })
        }
    } catch (error) {
        console.log("error : ", (error as { message: string }).message)
        return NextResponse.json({ error })
    };
};




export async function POST(req:NextRequest){
    let request = await req.json();
    try{
        if(request.product_id && request.quantity && request.user_id && request.price){
            let cartInsertedData = await db.insert(drizzleCartTable).values(request).returning() // due to returing(to return  back inserted data) you can console.log(CartInsertDta)
            return NextResponse.json({cartInsertedData})
        }else{
            throw Error("please put the following; proudct_id, quantity and user_id")
        }
    }catch(error){
        return NextResponse.json((error as {message:string}).message )
    }
}

export async function PUT(req:NextRequest){
    let request = await req.json();
    try {
        let cartUpdatedData = await db.update(drizzleCartTable).set(request).
        where(
            and(eq(drizzleCartTable.product_id, request.product_id),eq(drizzleCartTable.user_id, request.user_id))).returning();
        return NextResponse.json({cartUpdatedData})
    } catch (error) {
        return NextResponse.json((error as {message:string}).message)
    }
    
}


    export async function DELETE(req: NextRequest) {
        let url = req.nextUrl.searchParams;
    
        try {
            if (url.has("product_id") && url.has("user_id")) {
                let cartDeletedData = await db.delete(drizzleCartTable).
                    where(
                        and(eq(drizzleCartTable.product_id, (url.get("product_id") as string)), eq(drizzleCartTable.user_id, (url.get("user_id") as string)))
                    ).returning()
                    
                return NextResponse.json({ cartDeletedData });
            }
        } catch (error) {
            return NextResponse.json((error as { message: string }).message)
        }
    } 