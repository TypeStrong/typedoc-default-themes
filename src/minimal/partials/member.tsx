import React from 'react';
export const component = props => <React.Fragment><section className={"tsd-panel tsd-member " + props.cssClasses}>
    <a name={props.anchor} className="tsd-anchor"></a>
    {Boolean(props.name) && <React.Fragment>        <h3>{props.flags.map((item, i) => <React.Fragment key={i}><span className={"tsd-flag ts-flag" + item}>{item}</span> </React.Fragment>)}{props.wbr}</h3>
    </React.Fragment>}
    {Boolean(props.signatures) ? <React.Fragment>        {props.__partials__.member.signatures}
    </React.Fragment> : Boolean(props.hasGetterOrSetter) ? <React.Fragment>
        {props.__partials__.member.getterSetter}
    </React.Fragment> : Boolean(props.tryGetTargetReflectionDeep) ? <React.Fragment>
        {props.__partials__.member.reference}
    </React.Fragment> : <React.Fragment>        {props.__partials__.member.declaration}
    </React.Fragment>}

    {!Boolean(props.isContainer) && props.groups.map((item, i) => <React.Fragment key={i}>{item.children.map((item, i) => <React.Fragment key={i}>{!Boolean(item.hasOwnDocument) && <React.Fragment>                    {item.__partials__.member}
        </React.Fragment>}</React.Fragment>)}</React.Fragment>)}</section>

  {Boolean(props.isContainer) && <React.Fragment>    {props.__partials__.index}
    {props.__partials__.members}
  </React.Fragment>}</React.Fragment>;
