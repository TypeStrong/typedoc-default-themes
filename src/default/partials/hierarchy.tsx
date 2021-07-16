import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><ul className="tsd-hierarchy">
    {props.types.map((item, i) => <>        <li>
        {Boolean(item.superProps.isTarget) ? <>                <span className="target">{item}</span>
        </> : <>                <Compact>{item.__partials__.type}</Compact>
        </>}
        {Boolean(item.last) && <>                { With(item, item.superProps.next, (superProps, props, item) => (<>
                    {item.__partials__.hierarchy}
                </>)) }
        </>}        </li>
    </>)}</ul>
</>;
