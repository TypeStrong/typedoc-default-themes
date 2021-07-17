import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => Boolean(props.isVisible) && (Boolean(props.isLabel) ? <>        <li className={"label " + props.cssClasses}>
            <span>{props.wbr}</span>
        </li>
</> : Boolean(props.isGlobals) ? <>            <li className={"globals #if isInPath current /if " + props.cssClasses}>
                <a href={props.relativeURL}><em>{props.wbr}</em></a>
            </li>
</> : <>            <li className={"#if isInPath current /if " + props.cssClasses}>
                <a href={props.relativeURL}>{props.wbr}</a>
    {Boolean(props.isInPath) && Boolean(props.children) && <>                        <ul>
        {props.children.map((item, i) => <>                                {item.__partials__.navigation}
        </>)}                        </ul>
    </>}            </li>
</>);
