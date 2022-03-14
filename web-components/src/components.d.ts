/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface WcCard {
        "fullName": string;
        "photoUser": string;
        "resume": string;
        "role": string;
    }
    interface WcVideoPlayer {
        "provider": string;
        "source": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLWcCardElement extends Components.WcCard, HTMLStencilElement {
    }
    var HTMLWcCardElement: {
        prototype: HTMLWcCardElement;
        new (): HTMLWcCardElement;
    };
    interface HTMLWcVideoPlayerElement extends Components.WcVideoPlayer, HTMLStencilElement {
    }
    var HTMLWcVideoPlayerElement: {
        prototype: HTMLWcVideoPlayerElement;
        new (): HTMLWcVideoPlayerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "wc-card": HTMLWcCardElement;
        "wc-video-player": HTMLWcVideoPlayerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface WcCard {
        "fullName"?: string;
        "photoUser"?: string;
        "resume"?: string;
        "role"?: string;
    }
    interface WcVideoPlayer {
        "provider"?: string;
        "source"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "wc-card": WcCard;
        "wc-video-player": WcVideoPlayer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "wc-card": LocalJSX.WcCard & JSXBase.HTMLAttributes<HTMLWcCardElement>;
            "wc-video-player": LocalJSX.WcVideoPlayer & JSXBase.HTMLAttributes<HTMLWcVideoPlayerElement>;
        }
    }
}
