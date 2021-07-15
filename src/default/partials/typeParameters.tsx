import React from 'react';
export const component = props => <><ul className="tsd-type-parameters">
    {props.typeParameters.map((item, i) => <>        <li>
            <h4><Compact>
                {item.name}
            {Boolean(item.type) && <>                    <span className="tsd-signature-symbol">: </span>
                    <With superProps="props" props="type">{item.__partials__.type}</With>
            </>}{Boolean(item.default) && <>                     = <With superProps="props" props="default">{item.__partials__.type}</With>
            </>}            </Compact></h4>
            {item.__partials__.comment}
        </li>
    </>)}</ul>
</>;
