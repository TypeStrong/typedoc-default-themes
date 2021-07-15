import React from 'react';
export const component = props => Boolean(props.parent) ? <React.Fragment>    <With superProps="props" props="parent">{props.__partials__.breadcrumb}</With>
    <li>
    {Boolean(props.url) ? <React.Fragment>            <a href={props.relativeURL}>{props.name}</a>
    </React.Fragment> : <React.Fragment>            <span>{props.name}</span>
    </React.Fragment>}    </li>
</React.Fragment> : Boolean(props.url) && <React.Fragment>        <li>
            <a href={props.relativeURL}>{props.name}</a>
        </li>
</React.Fragment>;
