import React from 'react';
export const component = props => <React.Fragment>{
    /* {{#if isInPath*/
  }{
    /*    </ul> */
  }{
    /*    <ul class="current"> */
  }{
    /* {{/if*/
  }<li className={"#if isInPath current /if " + props.cssClasses}>
    <a href={props.relativeURL} className="tsd-kind-icon">{props.wbr}</a>
    {Boolean(props.children) && <React.Fragment>        <ul>
        {props.children.map((item, i) => <React.Fragment key={i}>                {item.__partials__.toc}
        </React.Fragment>)}        </ul>
    </React.Fragment>}</li>
  {
    /* {{#if isInPath*/
  }{
    /*     </ul> */
  }{
    /*     <ul class="after-current"> */
  }{
    /* {{/if*/
  }</React.Fragment>;
