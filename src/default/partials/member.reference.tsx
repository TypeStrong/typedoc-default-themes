import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => Boolean(props.tryGetTargetReflectionDeep) ? <>    <With superProps="props" props="tryGetTargetReflectionDeep">
        <IfCond cond="superProps.name '===' name">
            Re-exports <a href={props.relativeURL}>{props.name}</a>
        </IfCond>
        <IfNotCond cond="superProps.name '===' name">
      {Boolean(props.flags.isExported) ? <>                Renames and re-exports <a href={props.relativeURL}>{props.name}</a>
      </> : <>                Renames and exports <a href={props.relativeURL}>{props.name}</a>
      </>}        </IfNotCond>
    </With>
</> : <>    Re-exports {props.name}
</>;
