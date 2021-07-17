import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => Boolean(props.tryGetTargetReflectionDeep) ? <>    { With(item, item.tryGetTargetReflectionDeep, (superProps, props, item) => (<>
        <IfCond cond={superProps.name === name}>
            Re-exports <a href={props.relativeURL}>{props.name}</a>
        </IfCond>
        <IfNotCond cond={superProps.name === name}>
      {Boolean(props.flags.isExported) ? <>                Renames and re-exports <a href={props.relativeURL}>{props.name}</a>
      </> : <>                Renames and exports <a href={props.relativeURL}>{props.name}</a>
      </>}        </IfNotCond>
    </>)) }
</> : <>    Re-exports {props.name}
</>;
