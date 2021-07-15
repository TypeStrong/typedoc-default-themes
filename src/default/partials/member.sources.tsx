import React from 'react';
export const component = props => <React.Fragment><aside className="tsd-sources">
    {Boolean(props.implementationOf) && <React.Fragment>        <p>Implementation of <With superProps="props" props="implementationOf">{props.__partials__.typeAndParent}</With></p>
    </React.Fragment>}{Boolean(props.inheritedFrom) && <React.Fragment>        <p>Inherited from <With superProps="props" props="inheritedFrom">{props.__partials__.typeAndParent}</With></p>
    </React.Fragment>}{Boolean(props.overwrites) && <React.Fragment>        <p>Overrides <With superProps="props" props="overwrites">{props.__partials__.typeAndParent}</With></p>
    </React.Fragment>}{Boolean(props.sources) && <React.Fragment>        <ul>
        {props.sources.map((item, i) => <React.Fragment key={i}>{Boolean(item.url) ? <React.Fragment>                    <li>Defined in <a href={item.url}>{item.fileName}:{item.line}</a></li>
          </React.Fragment> : <React.Fragment>                    <li>Defined in {item.fileName}:{item.line}</li>
          </React.Fragment>}</React.Fragment>)}        </ul>
    </React.Fragment>}</aside>
</React.Fragment>;
