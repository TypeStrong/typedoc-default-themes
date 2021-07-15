import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
    {props.name}
  {Boolean(props.isOptional) ? <>        <span className="tsd-signature-symbol">?: </span>
  </> : <>        <span className="tsd-signature-symbol">: </span>
  </>}    { With(item || props, (item || props).element, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
</>;
