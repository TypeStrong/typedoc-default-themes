import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><aside className="tsd-sources">
    {Boolean(props.implementationOf) && <>        <p>Implementation of { With(item, item.implementationOf, (superProps, props, item) => (<>{__partials__.typeAndParent(props)}</>)) }</p>
    </>}{Boolean(props.inheritedFrom) && <>        <p>Inherited from { With(item, item.inheritedFrom, (superProps, props, item) => (<>{__partials__.typeAndParent(props)}</>)) }</p>
    </>}{Boolean(props.overwrites) && <>        <p>Overrides { With(item, item.overwrites, (superProps, props, item) => (<>{__partials__.typeAndParent(props)}</>)) }</p>
    </>}{Boolean(props.sources) && <>        <ul>
        {props.sources.map((item, i) => <>{Boolean(item.url) ? <>                    <li>Defined in <a href={item.url}>{item.fileName}:{item.line}</a></li>
          </> : <>                    <li>Defined in {item.fileName}:{item.line}</li>
          </>}</>)}        </ul>
    </>}</aside>
</>;
