import React from 'react';
export const component = props => <>
  <footer conditional="#unless settings.hideGenerator class=with-border-bottom /unless">
    <div className="container">
        <h2>Legend</h2>
        <div className="tsd-legend-group">
        {props.legend.map((item, i) => <>                <ul className="tsd-legend">
            {item.props.map((item, i) => <>                        <li className="<Compact>#each classes . /each</Compact>"><span className="tsd-kind-icon">{item.name}</span></li>
            </>)}                </ul>
        </>)}        </div>
    </div>
  </footer>

  {!Boolean(props.settings.hideGenerator) && <>    <div className="container tsd-generator">
        <p>Generated using <a href="https://typedoc.org/" target="_blank">TypeDoc</a></p>
    </div>
  </>}</>;
