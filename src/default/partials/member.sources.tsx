import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <><aside className="tsd-sources">
    {Boolean(props.implementationOf) && <>        <p>Implementation of <With superProps="props" props="implementationOf">{props.__partials__.typeAndParent}</With></p>
    </>}{Boolean(props.inheritedFrom) && <>        <p>Inherited from <With superProps="props" props="inheritedFrom">{props.__partials__.typeAndParent}</With></p>
    </>}{Boolean(props.overwrites) && <>        <p>Overrides <With superProps="props" props="overwrites">{props.__partials__.typeAndParent}</With></p>
    </>}{Boolean(props.sources) && <>        <ul>
        {props.sources.map((item, i) => <>{Boolean(item.url) ? <>                    <li>Defined in <a href={item.url}>{item.fileName}:{item.line}</a></li>
          </> : <>                    <li>Defined in {item.fileName}:{item.line}</li>
          </>}</>)}        </ul>
    </>}</aside>
</>;
