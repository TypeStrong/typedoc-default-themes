import React from 'react';
export const component = props => <React.Fragment>
  {Boolean(props.needsParens) && <React.Fragment>        <span className="tsd-signature-symbol">(</span>
  </React.Fragment>}{props.types.map((item, i) => <React.Fragment key={i}>{!Boolean(item.first) && <React.Fragment>            <span className="tsd-signature-symbol"> & </span>
    </React.Fragment>}        {item.__partials__.type}
  </React.Fragment>)}{Boolean(props.needsParens) && <React.Fragment>        <span className="tsd-signature-symbol">)</span>
  </React.Fragment>}</React.Fragment>;
