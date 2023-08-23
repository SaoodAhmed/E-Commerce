import { SignalZero } from 'lucide-react'
import { Product } from './Product'
import { defineField, type SchemaTypeDefinition } from 'sanity'

export const Sizes = {
  name:"size",
  title:"Sizes",
  type:"document",
  fields:[defineField({
    name:"size",
    type:"array",
    title:"Sizes",
    of:[{type:"string"}]
  })]
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product],
}
