import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <>
    <With superProps="props" props="elementType">
        {props.__partials__.type}
    </With>
    <span className="tsd-signature-symbol">?</span>
</>;
