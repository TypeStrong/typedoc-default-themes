import React from 'react';
export const component = props => <>
    <span className="tsd-signature-symbol">{props.operator} </span>
    <With superProps="props" props="target">
        {props.__partials__.type}
    </With>
</>;
