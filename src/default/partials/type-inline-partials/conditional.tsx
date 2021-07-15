import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>
  {Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">(</span>
  </>}    { With(item || props, (item || props).checkType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
    <span className="tsd-signature-symbol"> extends </span>
    { With(item || props, (item || props).extendsType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
    <span className="tsd-signature-symbol"> ? </span>
    { With(item || props, (item || props).trueType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
    <span className="tsd-signature-symbol"> : </span>
    { With(item || props, (item || props).falseType, (superProps, props, item) => (<>
        {props.__partials__.type}
    </>)) }
  {Boolean(props.needsParens) && <>        <span className="tsd-signature-symbol">)</span>
  </>}</>;
