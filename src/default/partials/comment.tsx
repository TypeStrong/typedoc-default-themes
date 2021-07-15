import React from 'react';
export const component = props => <React.Fragment><With superProps="props" props="comment">
    {Boolean(props.hasVisibleComponent) && <React.Fragment>        <div className="tsd-comment tsd-typography">
        {Boolean(props.shortText) && <React.Fragment>                <div className="lead">
                    <Markdown>{props.shortText}</Markdown>
                </div>
        </React.Fragment>}{Boolean(props.text) && <React.Fragment>                <Markdown>{props.text}</Markdown>
        </React.Fragment>}{Boolean(props.tags) && <React.Fragment>                <dl className="tsd-comment-tags">
            {props.tags.map((item, i) => <React.Fragment key={i}>                        <dt>{item.tagName}</dt>
                        <dd><Markdown>{item.text}</Markdown></dd>
            </React.Fragment>)}                </dl>
        </React.Fragment>}        </div>
    </React.Fragment>}</With>
</React.Fragment>;
