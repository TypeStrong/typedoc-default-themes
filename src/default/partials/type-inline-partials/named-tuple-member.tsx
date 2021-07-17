import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    {props.name}
  {Boolean(props.isOptional) ? <>        <span className="tsd-signature-symbol">?: </span>
  </> : <>        <span className="tsd-signature-symbol">: </span>
  </>}    { With(item, item.element, (superProps, props, item) => (<>
        {__partials__.type(props)}
    </>)) }
</>;
