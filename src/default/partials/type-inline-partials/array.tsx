import React from 'react';
export const component = props => <React.Fragment>
    <With superProps="props" props="elementType">
        {props.__partials__.type}
        <span className="tsd-signature-symbol">[]</span>
    </With>
</React.Fragment>;
