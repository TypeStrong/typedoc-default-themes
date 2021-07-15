import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <><ul className="tsd-hierarchy">
    {props.types.map((item, i) => <>        <li>
        {Boolean(item.superProps.isTarget) ? <>                <span className="target">{item}</span>
        </> : <>                <Compact>{item.__partials__.type}</Compact>
        </>}
        {Boolean(item.last) && <>                <With superProps="props" props="superProps.next">
                    {item.__partials__.hierarchy}
                </With>
        </>}        </li>
    </>)}</ul>
</>;
