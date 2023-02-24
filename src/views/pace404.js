import React from 'react'

import { Helmet } from 'react-helmet'

import './pace404.css'

const Pace404 = (props) => {
  return (
    <div className="pace404-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="pace404-pace404">
        <img
          alt="DALLE20230223174311923"
          src="/playground_assets/dalle20230223174311923-egi8-800h.png"
          className="pace404-d-a-l-l-e2023022317431"
        />
        <span className="pace404-text">
          <span>404</span>
        </span>
        <span className="pace404-text2">
          <span>
            page is not found
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="pace404-text4">
          <span>
            c2023 travel to company
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <img
          alt="Rectangle211924"
          src="/playground_assets/rectangle211924-8gh8-200h.png"
          className="pace404-rectangle21"
        />
        <span className="pace404-text6">
          <span>go back</span>
        </span>
      </div>
    </div>
  )
}

export default Pace404
