import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
  <html className="minimal no-js">
    <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title>{props.model.name} | {props.project.name}</title>
    <meta name="description" content={"Documentation for " + props.project.name} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">{props.CSS}</style>
    </head>
    <body>

      {props.__partials__.header}

      <nav className="tsd-navigation secondary">
    <ul>
          {props.toc.children.map((item, i) => <>            {item.__partials__.toc}
          </>)}    </ul>
      </nav>

      <div className="container container-main">
    <div className="content-wrap">
          {Boolean(props.model.readme) && <>                <div className="tsd-panel tsd-typography">
                        <Markdown>{props.model.readme}</Markdown>
                </div>
          </>}
        {props.contents}
        {props.__partials__.footer}
    </div>
      </div>

      <script type="text/javascript">
        {props.JS}
      </script>

      {props.__partials__.analytics}

    </body>
  </html>
</>;
