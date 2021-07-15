import React from 'react';
export const component = props => <React.Fragment>
    <span className="tsd-signature-symbol">`</span>
  {Boolean(props.head) && <React.Fragment>        <span className="tsd-signature-type">{props.head}</span>
  </React.Fragment>}{props.tail.map((item, i) => <React.Fragment key={i}>        <span className="tsd-signature-symbol">${"{"}</span>
        <With superProps="props" props="this.[0]">
            {item.__partials__.type}
        </With>
        <span className="tsd-signature-symbol">{"}"}</span>
    {Boolean(item.1) && <React.Fragment>            <span className="tsd-signature-type">{item.1}</span>
    </React.Fragment>}</React.Fragment>)}    <span className="tsd-signature-symbol">`</span>
</React.Fragment>;
