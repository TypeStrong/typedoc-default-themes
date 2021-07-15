import React from 'react';
export const component = props => <React.Fragment>{!Boolean(props.hideSources) && <React.Fragment>    {props.__partials__.member.sources}
  </React.Fragment>}
  {props.__partials__.comment}

  {Boolean(props.typeParameters) && <React.Fragment>    <h4 className="tsd-type-parameters-title">Type parameters</h4>
    {props.__partials__.typeParameters}
  </React.Fragment>}
  {Boolean(props.parameters) && <React.Fragment>    <h4 className="tsd-parameters-title">Parameters</h4>
    <ul className="tsd-parameters">
      {props.parameters.map((item, i) => <React.Fragment key={i}>            <li>
                <h5><Compact>
              {item.flags.map((item, i) => <React.Fragment key={i}>                        <span className={"tsd-flag ts-flag" + item}>{item}</span> 
              </React.Fragment>)}                    {Boolean(item.flags.isRest) && <span className="tsd-signature-symbol">...</span>}
                    {item.name}: 
                    <With superProps="props" props="type">{item.__partials__.type}</With>
              {Boolean(item.defaultValue) && <React.Fragment>                        <span className="tsd-signature-symbol">
                         = 
                        {item.defaultValue}
                        </span>
              </React.Fragment>}                </Compact></h5>

                {item.__partials__.comment}

          {Boolean(item.type.declaration) && <React.Fragment>                    <With superProps="props" props="type.declaration">
                        {item.__partials__.parameter}
                    </With>
          </React.Fragment>}            </li>
      </React.Fragment>)}    </ul>
  </React.Fragment>}
  {Boolean(props.type) && <React.Fragment>    <h4 className="tsd-returns-title">Returns <Compact><With superProps="props" props="type">{props.__partials__.type}</With></Compact></h4>

    {Boolean(props.comment.returns) && <React.Fragment>        <Markdown>{props.comment.returns}</Markdown>
    </React.Fragment>}
    {Boolean(props.type.declaration) && <React.Fragment>        <With superProps="props" props="type.declaration">
            {props.__partials__.parameter}
        </With>
    </React.Fragment>}</React.Fragment>}</React.Fragment>;
