import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><aside className="tsd-sources">
    {Boolean(props.implementationOf) && <>        <p>Implementation of { With(item || props, (item || props).implementationOf, (superProps, props, item) => (<>{props.__partials__.typeAndParent}</>)) }</p>
    </>}{Boolean(props.inheritedFrom) && <>        <p>Inherited from { With(item || props, (item || props).inheritedFrom, (superProps, props, item) => (<>{props.__partials__.typeAndParent}</>)) }</p>
    </>}{Boolean(props.overwrites) && <>        <p>Overrides { With(item || props, (item || props).overwrites, (superProps, props, item) => (<>{props.__partials__.typeAndParent}</>)) }</p>
    </>}{Boolean(props.sources) && <>        <ul>
        {props.sources.map((item, i) => <>{Boolean(item.url) ? <>                    <li>Defined in <a href={item.url}>{item.fileName}:{item.line}</a></li>
          </> : <>                    <li>Defined in {item.fileName}:{item.line}</li>
          </>}</>)}        </ul>
    </>}</aside>
</>;
