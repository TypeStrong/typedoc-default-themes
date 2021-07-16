import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
  {Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">(</span>
  </>}    { With(item, item.checkType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
    <span className="tsd-signature-symbol"> extends </span>
    { With(item, item.extendsType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
    <span className="tsd-signature-symbol"> ? </span>
    { With(item, item.trueType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
    <span className="tsd-signature-symbol"> : </span>
    { With(item, item.falseType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
  {Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">)</span>
  </>}</>;
