import React from 'react';
export const component = props => <React.Fragment><div className="tsd-panel tsd-typography">
    <Markdown>{props.model.readme}</Markdown>
  </div>
</React.Fragment>;
