import React from 'react';
export const component = props => <React.Fragment><ul className={"tsd-signatures " + props.cssClasses}>
    {props.signatures.map((item, i) => <React.Fragment key={i}>        <li className="tsd-signature tsd-kind-icon"><Compact>{item.__partials__.member.signature.title}</Compact></li>
    </React.Fragment>)}</ul>

  <ul className="tsd-descriptions">
    {props.signatures.map((item, i) => <React.Fragment key={i}>        <li className="tsd-description">
            {item.__partials__.member.signature.body}
        </li>
    </React.Fragment>)}</ul>
</React.Fragment>;
