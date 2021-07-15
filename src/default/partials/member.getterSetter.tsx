import React from 'react';
export const component = props => <React.Fragment><ul className={"tsd-signatures " + props.cssClasses}>
    {Boolean(props.getSignature) && <React.Fragment>        <With superProps="props" props="getSignature">
            <li className="tsd-signature tsd-kind-icon"><Compact>
                <span className="tsd-signature-symbol">get</span> 
                {props.superProps.name}
                {props.__partials__.member.signature.title}
            </Compact></li>
        </With>
    </React.Fragment>}{Boolean(props.setSignature) && <React.Fragment>        <With superProps="props" props="setSignature">
            <li className="tsd-signature tsd-kind-icon"><Compact>
                <span className="tsd-signature-symbol">set</span> 
                {props.superProps.name}
                {props.__partials__.member.signature.title}
            </Compact></li>
        </With>
    </React.Fragment>}</ul>

  <ul className="tsd-descriptions">
    {Boolean(props.getSignature) && <React.Fragment>        <With superProps="props" props="getSignature">
            <li className="tsd-description">
                {props.__partials__.member.signature.body}
            </li>
        </With>
    </React.Fragment>}{Boolean(props.setSignature) && <React.Fragment>        <With superProps="props" props="setSignature">
            <li className="tsd-description">
                {props.__partials__.member.signature.body}
            </li>
        </With>
    </React.Fragment>}</ul>
</React.Fragment>;
