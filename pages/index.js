// Utilities
import Link from 'next/link'

// Dependancies
import fetch from 'isomorphic-unfetch'

// Custom Components
import Header from '../components/global/Header'
import createMarkup from '../functions/createMarkup'

function IndexPage({ page, seo, title, json_ld, products }) {
  return (
    <section className="root-container">
      <Header seo={seo} title={title} json_ld={json_ld} />
      <section className="responsive-container homepage-container">

        <style jsx>{`
        .homepage-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding-top:2em;
        }
        tr {
          display:flex;
        }
        td {
          display:block;
          padding:1em;
        }
        tr td:nth-of-type(1){
          width:65%;
        }
        tr td:nth-of-type(2){
          width:15%;
          display:flex;
          align-items:center;
        }
        tr td:nth-last-of-type(1){
          width:20%;
        }
        .productImage {
          width:100%;
        }
        ul {
          list-style:disc;
          margin-left:10px;
        }
        ul a {
          cursor:pointer;
          transition:500ms;
        }
        ul a:hover {
          opacity:.5;
        }
      `}</style>
      </section>
    </section>
  )
}

IndexPage.getInitialProps = async ({ req }) => {

}


export default IndexPage