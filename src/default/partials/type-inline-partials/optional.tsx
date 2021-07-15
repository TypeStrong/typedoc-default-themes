import React from 'react';
export const component = props => <React.Fragment>
    <With superProps="props" props="elementType">
        {props.__partials__.type}
    </With>
    <span className="tsd-signature-symbol">?</span>
</React.Fragment>;
