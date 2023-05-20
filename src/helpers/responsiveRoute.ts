import type {RouteComponent} from "vue-router"

/**
 * Breakpoint configuration to be in line with element-ui's standards
 * @type {{LABELS: string[], VALUES: number[]}}
 */
type Breakpoint = {
    LABELS: string[];
    VALUES: number[];
}
const BREAKPOINTS: Breakpoint = {
    LABELS: ['lg', 'xl'],
    VALUES: [0, 1920, 3584, Infinity]
};


/**
 * @typedef ViewFactory
 * @type function
 * A function which returns a promise which resolves to a view. Used to dynamically fetch a view file on the fly during
 * run time on a need basis
 */


/**
 * A helper to get a responsive route factory which renders different views based on the current view point
 * @param {{xs:[ViewFactory],sm:[ViewFactory],md:[ViewFactory],lg:[ViewFactory]}} map - A map of breakpoint key to a ViewFactory
 * @returns {ViewFactory} - A view factory which invokes and returns an item supplied in the map based on the current viewport size
 */
declare type Lazy<T> = () => Promise<T>;
type Map = {
    [key: string]: () => RouteComponent | Lazy<RouteComponent>;
}

export default function responsiveRoute(map: Map) {
    return function getResponsiveView(): RouteComponent | Lazy<RouteComponent> {
        const screenWidth = document.documentElement.clientWidth;

        // Find the matching index for the current screen width
        const matchIndex = BREAKPOINTS.VALUES.findIndex((item, idx) => {
            if (idx === 0) {
                return false;
            }
            return screenWidth > BREAKPOINTS.VALUES[idx - 1] && screenWidth <= BREAKPOINTS.VALUES[idx];
        }) - 1;


        if (map[BREAKPOINTS.LABELS[matchIndex]]) {
            // Perfect match, use it
            return map[BREAKPOINTS.LABELS[matchIndex]]();
        } else {
            // Go down the responsive break points list until a match is found
            let counter = matchIndex;
            while (counter-- > 0) {
                if (map[BREAKPOINTS.LABELS[counter]]) {
                    return map[BREAKPOINTS.LABELS[counter]]();
                }
            }
            return Promise.reject({
                code: 500,
                info: 'No component matched the breakpoint - probably a configuration error'
            });
        }
    };
}