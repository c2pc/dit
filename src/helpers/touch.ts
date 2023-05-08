import type {Ref} from "vue";
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

export type ITouch = {
    isTouch: Ref<boolean>
    onClick: () => void
};

export const useTouch = (hoverElement: Ref): ITouch => {
    const isTouch: Ref<boolean> = ref<boolean>(false)

    onClickOutside(hoverElement, event => {
        isTouch.value = false
    })
    const onClick = () => {isTouch.value = true}
    
    return {
        isTouch: isTouch,
        onClick: onClick
    }
}