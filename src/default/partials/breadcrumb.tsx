import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => Boolean(props.parent) ? <>    { With(item, item.parent, (superProps, props, item) => (<>{__partials__.breadcrumb(props)}</>)) }
    <li>
    {Boolean(props.url) ? <>            <a href={props.relativeURL}>{props.name}</a>
    </> : <>            <span>{props.name}</span>
    </>}    </li>
</> : Boolean(props.url) && <>        <li>
            <a href={props.relativeURL}>{props.name}</a>
        </li>
</>;
