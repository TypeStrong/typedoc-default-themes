import React from 'react';
export const component = props => <React.Fragment>
    <span className="tsd-signature-symbol">{props.operator} </span>
    <With superProps="props" props="target">
        {props.__partials__.type}
    </With>
</React.Fragment>;
