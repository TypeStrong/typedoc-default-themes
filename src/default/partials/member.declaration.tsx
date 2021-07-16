import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><div className="tsd-signature tsd-kind-icon"><Compact>
    {props.wbr}
      {Boolean(props.typeParameters) && <>        {"<"}
        {props.typeParameters.map((item, i) => <>            {Boolean(item.index) && ",\xA0"}
            {item.name}
        </>)}        {'>'}
      </>}    <span className="tsd-signature-symbol">{Boolean(props.isOptional) && "?"}:</span> { With(item, item.type, (superProps, props, item) => (<>{props.__partials__.type}</>)) }
      {Boolean(props.defaultValue) && <>        <span className="tsd-signature-symbol">
         =
        {props.defaultValue}
        </span>
      </>}</Compact></div>

  {props.__partials__.member.sources}

  {props.__partials__.comment}

  {Boolean(props.typeParameters) && <>    <h4 className="tsd-type-parameters-title">Type parameters</h4>
    {props.__partials__.typeParameters}
  </>}
  {Boolean(props.type.declaration) && <>    <div className="tsd-type-declaration">
        <h4>Type declaration</h4>
        { With(item, item.type.declaration, (superProps, props, item) => (<>
            {props.__partials__.parameter}
        </>)) }
    </div>
  </>}</>;
