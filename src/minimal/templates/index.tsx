import React from 'react';
export const component = props => <React.Fragment><With superProps="props" props="model">
    {props.__partials__.comment}
  </With>

  {Boolean(props.model.typeHierarchy) && <React.Fragment>    <section className="tsd-hierarchy">
        <h2>Hierarchy</h2>
        <With superProps="props" props="model.typeHierarchy">{props.__partials__.hierarchy}</With>
    </section>
  </React.Fragment>}
  <With superProps="props" props="model">
    <div style={{
      "position": "relative"
    }}><a name="typedoc-main-index" className="tsd-anchor"></a></div>
    {props.__partials__.index}
    {props.__partials__.members}
  </With>
</React.Fragment>;
