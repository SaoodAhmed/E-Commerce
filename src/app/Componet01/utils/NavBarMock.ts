import { NavBarType } from "./NavBarItemTypes"


export const NavabarItems:NavBarType[]= [
    {
        href:"/male/Male",
        label:"Male",
        isDropDown:true,
        dropDownData:
        [
           
            {
                href:"/male/Jackets",
                label:"Jacket",
                isDropDown:false
            },
            {
                href:"/male/Sweater",
                label:"Sweaters",
                isDropDown:false
            }

        ]
    },
    {
        href:"/female/Female",
        label:"Female",
        isDropDown:true,
        dropDownData:
        [
            {
                href:"/female/Dress",
                label:"Dresses",
                isDropDown:false
            },
            {
                href:"/female/T-Shirts",
                label:"T-Shirts",
                isDropDown:false
            },
            {
                href:"/female/Pants",
                label:"Pants",
                isDropDown:false
            },
            {
                href:"/female/Jackets",
                label:"Jacket",
                isDropDown:false
            },
            {
                href:"/female/Sweater",
                label:"Sweaters",
                isDropDown:false
            }

        ]
    },
    {
        href:"/Kids",
        label:"Kids",
        isDropDown:false,
    },
    {
        href:"/products",
        label:"All Products",
        isDropDown:false,
        
    },
]