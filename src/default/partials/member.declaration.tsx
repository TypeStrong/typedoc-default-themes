import React from 'react';
export const component = props => <React.Fragment><div className="tsd-signature tsd-kind-icon"><Compact>
    {props.wbr}
      {Boolean(props.typeParameters) && <React.Fragment>        <
        {props.typeParameters.map((item, i) => <React.Fragment key={i}>            {Boolean(item.index) && ",\xA0"}
            {item.name}
        </React.Fragment>)}        >
      </React.Fragment>}    <span className="tsd-signature-symbol">{Boolean(props.isOptional) && "?"}:</span> <With superProps="props" props="type">{props.__partials__.type}</With>
      {Boolean(props.defaultValue) && <React.Fragment>        <span className="tsd-signature-symbol">
         = 
        {props.defaultValue}
        </span>
      </React.Fragment>}</Compact></div>

  {props.__partials__.member.sources}

  {props.__partials__.comment}

  {Boolean(props.typeParameters) && <React.Fragment>    <h4 className="tsd-type-parameters-title">Type parameters</h4>
    {props.__partials__.typeParameters}
  </React.Fragment>}
  {Boolean(props.type.declaration) && <React.Fragment>    <div className="tsd-type-declaration">
        <h4>Type declaration</h4>
        <With superProps="props" props="type.declaration">
            {props.__partials__.parameter}
        </With>
    </div>
  </React.Fragment>}</React.Fragment>;
