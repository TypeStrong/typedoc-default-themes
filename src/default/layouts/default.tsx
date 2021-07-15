import React from 'react';
export const component = props => <>
  <html className="default no-js">
    <head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <title><IfCond cond="model.name '==' project.name">{props.project.name}</IfCond><IfNotCond cond="model.name '==' project.name">{props.model.name} | {props.project.name}</IfNotCond></title>
    <meta name="description" content={"Documentation for " + props.project.name} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href={props.relativeURL} />
    <script async="" src={props.relativeURL} id="search-script"></script>
    </head>
    <body>

      {props.__partials__.header}

      <div className="container container-main">
    <div className="row">
        <div className="col-8 col-content">
            {props.contents}
        </div>
        <div className="col-4 col-menu menu-sticky-wrap menu-highlight">
            <nav className="tsd-navigation primary">
                <ul>
                {props.navigation.children.map((item, i) => <>                        {item.__partials__.navigation}
                </>)}                </ul>
            </nav>

            <nav className="tsd-navigation secondary menu-sticky">
                <ul className="before-current">
                {props.toc.children.map((item, i) => <>                        {item.__partials__.toc.root}
                </>)}                </ul>
            </nav>
        </div>
    </div>
      </div>

      {props.__partials__.footer}

      <div className="overlay"></div>
      <script src={props.relativeURL}></script>

      {props.__partials__.analytics}

    </body>
  </html>
</>;
