import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    <span className="tsd-signature-symbol">...</span>
    { With(item, item.elementType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
</>;
