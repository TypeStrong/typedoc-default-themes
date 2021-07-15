import {With, IfCond, IfNotCond, Markdown} from '../../lib';
import React from 'react';
export const component = props => <><div className="tsd-panel tsd-typography">
    <Markdown>{props.model.readme}</Markdown>
  </div>
</>;
