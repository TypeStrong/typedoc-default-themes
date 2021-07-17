import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><li className={"#if isInPath current /if " + props.cssClasses}>
    <a href={props.relativeURL} className="tsd-kind-icon">{props.wbr}</a>
    {Boolean(props.children) && <>        <ul>
        {props.children.map((item, i) => <>                {item.__partials__.toc}
        </>)}        </ul>
    </>}</li>
</>;
