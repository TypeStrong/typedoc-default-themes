import {With, Compact, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>{!Boolean(props.hideSources) && <>    {props.__partials__.member.sources}
  </>}
  {props.__partials__.comment}

  {Boolean(props.typeParameters) && <>    <h4 className="tsd-type-parameters-title">Type parameters</h4>
    {props.__partials__.typeParameters}
  </>}
  {Boolean(props.parameters) && <>    <h4 className="tsd-parameters-title">Parameters</h4>
    <ul className="tsd-parameters">
      {props.parameters.map((item, i) => <>            <li>
                <h5><Compact>
              {item.flags.map((item, i) => <>                        <span className={"tsd-flag ts-flag" + item}>{item}</span>
              </>)}                    {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}
                    {item.name}:
                    { With(item || props, (item || props).type, (superProps, props, item) => (<>{item.__partials__.type}</>)) }
              {Boolean(item.defaultValue) && <>                        <span className="tsd-signature-symbol">
                         =
                        {item.defaultValue}
                        </span>
              </>}                </Compact></h5>

                {item.__partials__.comment}

          {Boolean(item.type.declaration) && <>                    { With(item || props, (item || props).type.declaration, (superProps, props, item) => (<>
                        {item.__partials__.parameter}
                    </>)) }
          </>}            </li>
      </>)}    </ul>
  </>}
  {Boolean(props.type) && <>    <h4 className="tsd-returns-title">Returns <Compact>{ With(item || props, (item || props).type, (superProps, props, item) => (<>{props.__partials__.type}</>)) }</Compact></h4>

    {Boolean(props.comment.returns) && <>        <Markdown>{props.comment.returns}</Markdown>
    </>}
    {Boolean(props.type.declaration) && <>        { With(item || props, (item || props).type.declaration, (superProps, props, item) => (<>
            {props.__partials__.parameter}
        </>)) }
    </>}</>}</>;
