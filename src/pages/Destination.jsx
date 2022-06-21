import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Destination = () => (
  <Layout>
    <Seo title="Page two" />
    <h1
    className="test-text"
    >
    Destination Nigga
    </h1>
    <Link to="/">Go back to the homepage</Link>
    <br />
    <Link to="/company/history">Go to history</Link>
  </Layout>
)

export default Destination
