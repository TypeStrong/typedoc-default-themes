import React from 'react';
export const component = props => Boolean(props.parent) ? <>    <With superProps="props" props="parent">{props.__partials__.breadcrumb}</With>
    <li>
    {Boolean(props.url) ? <>            <a href={props.relativeURL}>{props.name}</a>
    </> : <>            <span>{props.name}</span>
    </>}    </li>
</> : Boolean(props.url) && <>        <li>
            <a href={props.relativeURL}>{props.name}</a>
        </li>
</>;
