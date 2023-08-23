import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion:"v2023-07-17",
  dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:false,
})
