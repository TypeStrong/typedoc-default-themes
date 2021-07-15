import React from 'react';
export const component = props => <React.Fragment><ul className="tsd-type-parameters">
    {props.typeParameters.map((item, i) => <React.Fragment key={i}>        <li>
            <h4><Compact>
                {item.name}
            {Boolean(item.type) && <React.Fragment>                    <span className="tsd-signature-symbol">: </span>
                    <With superProps="props" props="type">{item.__partials__.type}</With>
            </React.Fragment>}{Boolean(item.default) && <React.Fragment>                     = <With superProps="props" props="default">{item.__partials__.type}</With>
            </React.Fragment>}            </Compact></h4>
            {item.__partials__.comment}
        </li>
    </React.Fragment>)}</ul>
</React.Fragment>;
