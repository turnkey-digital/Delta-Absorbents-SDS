// Utilities
import Link from 'next/link'

// Dependancies
import fetch from 'isomorphic-unfetch'

// Custom Components
import Header from '../components/global/Header'
import createMarkup from '../functions/createMarkup'

function IndexPage() {
  return (
    <section className="root-container">
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


export default IndexPage