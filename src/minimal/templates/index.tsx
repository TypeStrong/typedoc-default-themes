import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = (props, item = props) => <>{ With(item || props, (item || props).model, (superProps, props, item) => (<>
    {props.__partials__.comment}
  </>)) }

  {Boolean(props.model.typeHierarchy) && <>    <section className="tsd-hierarchy">
        <h2>Hierarchy</h2>
        { With(item || props, (item || props).model.typeHierarchy, (superProps, props, item) => (<>{props.__partials__.hierarchy}</>)) }
    </section>
  </>}
  { With(item || props, (item || props).model, (superProps, props, item) => (<>
    <div style={{
      "position": "relative"
    }}><a name="typedoc-main-index" className="tsd-anchor"></a></div>
    {props.__partials__.index}
    {props.__partials__.members}
  </>)) }
</>;
