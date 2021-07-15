import React from 'react';
export const component = props => <React.Fragment><ul className="tsd-hierarchy">
    {props.types.map((item, i) => <React.Fragment key={i}>        <li>
        {Boolean(item.superProps.isTarget) ? <React.Fragment>                <span className="target">{item}</span>
        </React.Fragment> : <React.Fragment>                <Compact>{item.__partials__.type}</Compact>
        </React.Fragment>}
        {Boolean(item.last) && <React.Fragment>                <With superProps="props" props="superProps.next">
                    {item.__partials__.hierarchy}
                </With>
        </React.Fragment>}        </li>
    </React.Fragment>)}</ul>
</React.Fragment>;
