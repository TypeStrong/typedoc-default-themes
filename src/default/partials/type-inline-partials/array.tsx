import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    { With(item, item.elementType, (superProps, props, item) => (<>
        {props.__partials__.type}
        <span className="tsd-signature-symbol">[]</span>
    </>)) }
</>;
