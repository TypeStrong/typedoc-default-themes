import {With, __partials__, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <><ul className={"tsd-signatures " + props.cssClasses}>
    {Boolean(props.getSignature) && <>        { With(item, item.getSignature, (superProps, props, item) => (<>
            <li className="tsd-signature tsd-kind-icon"><Compact>
                <span className="tsd-signature-symbol">get</span>
                {props.superProps.name}
                {__partials__['member.signature.title'](props, {hideName: true})}
            </Compact></li>
        </>)) }
    </>}{Boolean(props.setSignature) && <>        { With(item, item.setSignature, (superProps, props, item) => (<>
            <li className="tsd-signature tsd-kind-icon"><Compact>
                <span className="tsd-signature-symbol">set</span>
                {props.superProps.name}
                {__partials__['member.signature.title'](props, {hideName: true})}
            </Compact></li>
        </>)) }
    </>}</ul>

  <ul className="tsd-descriptions">
    {Boolean(props.getSignature) && <>        { With(item, item.getSignature, (superProps, props, item) => (<>
            <li className="tsd-description">
                {__partials__['member.signature.body'](props)}
            </li>
        </>)) }
    </>}{Boolean(props.setSignature) && <>        { With(item, item.setSignature, (superProps, props, item) => (<>
            <li className="tsd-description">
                {__partials__['member.signature.body'](props)}
            </li>
        </>)) }
    </>}</ul>
</>;
