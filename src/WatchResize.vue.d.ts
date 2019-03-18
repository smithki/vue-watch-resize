import { Subscription } from 'rxjs';
import Vue, { VueConstructor } from 'vue';
export interface WatchResizeData {
    elResizeSubscription: Subscription | null;
}
declare const _default: VueConstructor<WatchResizeData & {
    watchElForResize(): Promise<void>;
} & {
    transitionDuration: any;
    transitionTimingFunction: any;
    transitionDelay: any;
    noTransition: any;
} & Vue>;
export default _default;
