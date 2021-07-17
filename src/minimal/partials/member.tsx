import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><section className={"tsd-panel tsd-member " + props.cssClasses}>
    <a name={props.anchor} className="tsd-anchor"></a>
    {Boolean(props.name) && <>        <h3>{props.flags.map((item, i) => <><span className={"tsd-flag ts-flag" + item}>{item}</span> </>)}{props.wbr}</h3>
    </>}
    {Boolean(props.signatures) ? <>        {__partials__['member.signatures'](props)}
    </> : Boolean(props.hasGetterOrSetter) ? <>
        {__partials__['member.getterSetter'](props)}
    </> : Boolean(props.tryGetTargetReflectionDeep) ? <>
        {__partials__['member.reference'](props)}
    </> : <>        {__partials__['member.declaration'](props)}
    </>}

    {!Boolean(props.isContainer) && props.groups.map((item, i) => <>{item.children.map((item, i) => <>{!Boolean(item.hasOwnDocument) && <>                    {item.__partials__.member}
        </>}</>)}</>)}</section>

  {Boolean(props.isContainer) && <>    {__partials__.index(props)}
    {__partials__.members(props)}
  </>}</>;
