import type { ComponentTemplateResult } from '@muban/template';
import { html } from '@muban/template';
import type { HeadingProps } from './Heading.props';

export function headingTemplate({ as, copy, style }: HeadingProps): ComponentTemplateResult {
  return html`<${as}class='${style}' ${copy} </${as}>`;
}
