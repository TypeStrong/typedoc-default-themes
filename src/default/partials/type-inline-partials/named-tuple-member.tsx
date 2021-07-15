import React from 'react';
export const component = props => <>
    {props.name}
  {Boolean(props.isOptional) ? <>        <span className="tsd-signature-symbol">?: </span>
  </> : <>        <span className="tsd-signature-symbol">: </span>
  </>}    <With superProps="props" props="element">
        {props.__partials__.type}
    </With>
</>;
