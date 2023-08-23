import { defineField } from "sanity";

export const Product = defineField({
    name:"product",
    title:"Products",
    type:"document",
    fields:[defineField({
        name:"productName",
        title:"Product Title",
        type:"string"

    }),
    defineField({
        name:"slug",
        title:"Slug",
        type:"slug",
        options:{
            source:"productName",
            maxLength:200,
            slugify:(input:any)=>input
            .toLowerCase()
            .replace(/\s+/g,'-')
            .slice(0,200)
        }

    }),
    {
        name: 'description',
        type: 'array',
        title: 'Description',
        of: [
            {
                type: "block"
            }
        ]
    },
    defineField({
        name:"image",
        type:"array",
        title:"Product Image",
        of:[defineField({
            type:"image",
            name:"image",
            fields:[{
                name:"alt",
                title:"Alternative Text",
                type:"text"
            }]
        })]
    }),
    defineField({
        name:"category",
        type:"array",
        title:"Product Category",
        of:[defineField({
            name:"category",
            title:"Product Category",
            type:"string"
        })]
    }),
    defineField({
        name:"price",
        title:"Product Price",
        type:"number"
    }),
    defineField({
        name:"size",
        type:"array",
        title:"Sizes",
        of:[{type:"string"}]
      }),
    
    defineField({
        name:"quantity",
        type:"string",
        title:"Quantity"
    })

]

})