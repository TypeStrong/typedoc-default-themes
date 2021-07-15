import React from 'react';
export const component = props => <React.Fragment><li className={"#if isInPath current /if " + props.cssClasses}>
    <a href={props.relativeURL} className="tsd-kind-icon">{props.wbr}</a>
    {Boolean(props.children) && <React.Fragment>        <ul>
        {props.children.map((item, i) => <React.Fragment key={i}>                {item.__partials__.toc}
        </React.Fragment>)}        </ul>
    </React.Fragment>}</li>
</React.Fragment>;
