import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => Boolean(props.parent) ? <>    { With(item || props, (item || props).parent, (superProps, props, item) => (<>{props.__partials__.breadcrumb}</>)) }
    <li>
    {Boolean(props.url) ? <>            <a href={props.relativeURL}>{props.name}</a>
    </> : <>            <span>{props.name}</span>
    </>}    </li>
</> : Boolean(props.url) && <>        <li>
            <a href={props.relativeURL}>{props.name}</a>
        </li>
</>;
