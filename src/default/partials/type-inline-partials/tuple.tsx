import React from 'react';
export const component = props => <React.Fragment>
    <span className="tsd-signature-symbol">[</span>
  {props.elements.map((item, i) => <React.Fragment key={i}>{!Boolean(item.first) && <React.Fragment>            <span className="tsd-signature-symbol">, </span>
    </React.Fragment>}        {item.__partials__.type}
  </React.Fragment>)}    <span className="tsd-signature-symbol">]</span>
</React.Fragment>;
