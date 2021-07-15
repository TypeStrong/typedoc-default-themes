import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <><ul className={"tsd-signatures " + props.cssClasses}>
    {Boolean(props.getSignature) && <>        <With superProps="props" props="getSignature">
            <li className="tsd-signature tsd-kind-icon"><Compact>
                <span className="tsd-signature-symbol">get</span>
                {props.superProps.name}
                {props.__partials__.member.signature.title}
            </Compact></li>
        </With>
    </>}{Boolean(props.setSignature) && <>        <With superProps="props" props="setSignature">
            <li className="tsd-signature tsd-kind-icon"><Compact>
                <span className="tsd-signature-symbol">set</span>
                {props.superProps.name}
                {props.__partials__.member.signature.title}
            </Compact></li>
        </With>
    </>}</ul>

  <ul className="tsd-descriptions">
    {Boolean(props.getSignature) && <>        <With superProps="props" props="getSignature">
            <li className="tsd-description">
                {props.__partials__.member.signature.body}
            </li>
        </With>
    </>}{Boolean(props.setSignature) && <>        <With superProps="props" props="setSignature">
            <li className="tsd-description">
                {props.__partials__.member.signature.body}
            </li>
        </With>
    </>}</ul>
</>;
