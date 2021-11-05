import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>Bad SSR, this should never render</h1>
      
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    throw new Error("Opps, I did it agian!!")
  } catch (error) {
    return {
      headers: {
        status: 500,
      },
      props: {},
    }
  }
}
