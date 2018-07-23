import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';

import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import '@kano/kwc-style/typography.js';
import '@kano/kwc-icons/kwc-ui-icons.js';

/**
 * `kwc-reward`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

class KwcReward extends PolymerElement {
	static get is() { return 'kwc-reward'; }
	static get template() {
		return html`
			<style>
				slot[name="top"] .title {
					color: var(--kwc-reward-title-color, #A1A5A8);
					font-weight: var(--kwc-reward-title-font-weight, bold);
					font-size: var(--kwc-reward-title-font-size, 24.5px);
					margin-top: var(--kwc-reward-title-margin-top, 0);
					margin-bottom: var(--kwc-reward-title-margin-bottom, 16px);
				}
				slot[name="bottom"] button {
					border: var(--kwc-reward-button-border, none);
					padding: var(--kwc-reward-button-padding, 11px 21px);
					border-radius: var(--kwc-reward-button-border-radius, 25px);
					font-size: var(--kwc-reward-button-font-size, 16px);
					font-weight: var(--kwc-reward-button-font-weight, bold);
					color: var(--kwc-reward-button-color, #FFF);
					text-transform: var(--kwc-reward-button-text-transform, capitalize);
					margin-top: var(--kwc-reward-button-margin-top, 32px);
					background: var(--kwc-reward-button-background, #FE6B01);
				}
				slot[name="bottom"] button:hover {
					cursor: var(--kwc-reward-button-hover-cursor, pointer);
				}
				slot[name="bottom"] button[disabled] {
					background: var(--kwc-reward-button-disabled-background, #9FA4A8);
				}
				.closable {
					position: var(--kwc-reward-close-position, absolute);
					top: var(--kwc-reward-close-top, 16px);
					right: var(--kwc-reward-close-position-left-right, 16px);
					display: flex;
					align-items: center;
					flex-direction: row-reverse;
				}
				.closable[position="left"] {
					left: var(--kwc-reward-close-position-left-right, 16px);
					flex-direction: row;
				}
				.closable span {
					padding-left: 0;
					padding-right: 8px;
					@apply --kwc-reward-close-label;
				}
				.closable[position="left"] span {
					padding-left: 8px;
					padding-right: 0;
				}
				.closable iron-icon {
					width: var(--kwc-reward-close-width, 16px);
					height: var(--kwc-reward-close-height, 16px);
				}
				.closable iron-icon[icon] {
					fill: #FFF;
				}
				.closable:hover {
					cursor: var(--kwc-reward-close-hover-cursor, pointer);
				}
				.closable[hidden] {
					display: none;
				}
			</style>
			<div class="content">
				<div role="button" class="closable" position$="[[closePosition]]" hidden$="[[!closable]]" dialog-dismiss$="[[closable]]">
					<template is="dom-if" if="[[closeIcon]]">
						<iron-icon src="[[closeIcon]]"></iron-icon>
					</template>
					<template is="dom-if" if="[[!closeIcon]]">
						<iron-icon icon="kwc-ui-icons:close"></iron-icon>
					</template>
					<span>[[closeLabel]]</span>
				</div>
				<slot name="top">
					<p class="title" hidden$="[[!heading]]">[[heading]]</p>
				</slot>
				<slot name="middle"></slot>
				<slot name="bottom"></slot>
			</div>
		`;
	}
	static get properties() {
		return {
			heading: {
				type: String,
				value: '',
			},
			closable: {
				type: Boolean,
				value: false,
			},
			closeIcon: {
				type: String,
				value: '',
			},
			closeSrc: {
				type: String,
				value: '',
			},
			closePosition: {
				type: String,
				value: 'right',
			},
			closeLabel: {
				type: String,
				value: '',
			},
		};
	}
}

window.customElements.define(KwcReward.is, KwcReward);
