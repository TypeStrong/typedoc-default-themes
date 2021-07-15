import React from 'react';
export const component = props => Boolean(props.tryGetTargetReflectionDeep) ? <React.Fragment>    <With superProps="props" props="tryGetTargetReflectionDeep">
        <IfCond cond="superProps.name '===' name">
            Re-exports <a href={props.relativeURL}>{props.name}</a>
        </IfCond>
        <IfNotCond cond="superProps.name '===' name">
      {Boolean(props.flags.isExported) ? <React.Fragment>                Renames and re-exports <a href={props.relativeURL}>{props.name}</a>
      </React.Fragment> : <React.Fragment>                Renames and exports <a href={props.relativeURL}>{props.name}</a>
      </React.Fragment>}        </IfNotCond>
    </With>
</React.Fragment> : <React.Fragment>    Re-exports {props.name}
</React.Fragment>;
