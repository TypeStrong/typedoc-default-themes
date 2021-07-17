import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../../lib';
import React from 'react';
export const component = (props, item = props) => <>
  {Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">(</span>
  </>}    { With(item, item.checkType, (superProps, props, item) => (<>
        {__partials__.type(props, {needsParens: true})}
    </>)) }
    <span className="tsd-signature-symbol"> extends </span>
    { With(item, item.extendsType, (superProps, props, item) => (<>
        {__partials__.type(props)}
    </>)) }
    <span className="tsd-signature-symbol"> ? </span>
    { With(item, item.trueType, (superProps, props, item) => (<>
        {__partials__.type(props)}
    </>)) }
    <span className="tsd-signature-symbol"> : </span>
    { With(item, item.falseType, (superProps, props, item) => (<>
        {__partials__.type(props)}
    </>)) }
  {Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">)</span>
  </>}</>;
