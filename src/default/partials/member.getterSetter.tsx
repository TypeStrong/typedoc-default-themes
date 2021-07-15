import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><ul className={"tsd-signatures " + props.cssClasses}>
    {Boolean(props.getSignature) && <>        { With(item || props, (item || props).getSignature, (superProps, props, item) => (<>
            <li className="tsd-signature tsd-kind-icon"><Compact>
                <span className="tsd-signature-symbol">get</span>
                {props.superProps.name}
                {props.__partials__.member.signature.title}
            </Compact></li>
        </>)) }
    </>}{Boolean(props.setSignature) && <>        { With(item || props, (item || props).setSignature, (superProps, props, item) => (<>
            <li className="tsd-signature tsd-kind-icon"><Compact>
                <span className="tsd-signature-symbol">set</span>
                {props.superProps.name}
                {props.__partials__.member.signature.title}
            </Compact></li>
        </>)) }
    </>}</ul>

  <ul className="tsd-descriptions">
    {Boolean(props.getSignature) && <>        { With(item || props, (item || props).getSignature, (superProps, props, item) => (<>
            <li className="tsd-description">
                {props.__partials__.member.signature.body}
            </li>
        </>)) }
    </>}{Boolean(props.setSignature) && <>        { With(item || props, (item || props).setSignature, (superProps, props, item) => (<>
            <li className="tsd-description">
                {props.__partials__.member.signature.body}
            </li>
        </>)) }
    </>}</ul>
</>;
