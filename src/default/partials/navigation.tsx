import React from 'react';
export const component = props => Boolean(props.isVisible) && (Boolean(props.isLabel) ? <React.Fragment>        <li className={"label " + props.cssClasses}>
            <span>{props.wbr}</span>
        </li>
</React.Fragment> : Boolean(props.isGlobals) ? <React.Fragment>            <li className={"globals #if isInPath current /if " + props.cssClasses}>
                <a href={props.relativeURL}><em>{props.wbr}</em></a>
            </li>
</React.Fragment> : <React.Fragment>            <li className={"#if isInPath current /if " + props.cssClasses}>
                <a href={props.relativeURL}>{props.wbr}</a>
    {Boolean(props.isInPath) && Boolean(props.children) && <React.Fragment>                        <ul>
        {props.children.map((item, i) => <React.Fragment key={i}>                                {item.__partials__.navigation}
        </React.Fragment>)}                        </ul>
    </React.Fragment>}            </li>
</React.Fragment>);
