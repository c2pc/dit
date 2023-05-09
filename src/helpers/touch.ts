import type {Ref} from "vue";
import {ref} from "vue";
import {onClickOutside, useElementHover} from "@vueuse/core";

export type ITouch = {
    isTouch: Ref<boolean>
    onClick: () => void
};

export const useTouch = (hoverElement: Ref): ITouch => {
    const isTouch: Ref<boolean> = useElementHover(hoverElement)


    /*onClickOutside(hoverElement, event => {
        isTouch.value = false
    })*/
    //const onClick = () => {isTouch.value = true}
    
    return {
        isTouch: isTouch,
        onClick:  () => {}
    }
}