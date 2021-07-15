import React from 'react';
export const component = props => <><li className={"#if isInPath current /if " + props.cssClasses}>
    <a href={props.relativeURL} className="tsd-kind-icon">{props.wbr}</a>
    {Boolean(props.children) && <>        <ul>
        {props.children.map((item, i) => <>                {item.__partials__.toc}
        </>)}        </ul>
    </>}</li>
</>;
