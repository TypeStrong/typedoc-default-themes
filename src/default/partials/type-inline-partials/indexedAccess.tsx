import React from 'react';
export const component = props => <>
    <With superProps="props" props="objectType">
        {props.__partials__.type}
    </With>
    <span className="tsd-signature-symbol">[</span>
    <With superProps="props" props="indexType">
        {props.__partials__.type}
    </With>
    <span className="tsd-signature-symbol">]</span>
</>;
