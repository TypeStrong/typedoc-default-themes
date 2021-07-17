import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    { With(item, item.elementType, (superProps, props, item) => (<>
        {__partials__.type(props, {needsParens: true})}
        <span className="tsd-signature-symbol">[]</span>
    </>)) }
</>;
