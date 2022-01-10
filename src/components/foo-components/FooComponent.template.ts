import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import { headingTemplate } from '../heading/Heading.Template';
import type { FooComponentProps } from './FooComponents.props';

export function fooComponentTemplate({ title, copy }: FooComponentProps): ComponentTemplateResult {
  return html`<section data-component="foo-component"
  ${headingTemplate({
    as: 'h1',
    copy: 'Hello Word from Heading',
    style: 'h2',
  })}
    <h1>${title}</h1>
    <p>${copy}</p>
    </section>`;
}
