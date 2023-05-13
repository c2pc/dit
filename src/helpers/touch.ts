import type {Ref} from "vue";
import {ref} from "vue";
import {onClickOutside} from "@vueuse/core";

export type ITouch = {
    isTouch: Ref<boolean>
    onClick: () => void
};

export const useTouch = (hoverElement: Ref, disable: boolean): ITouch => {
    const isTouch: Ref<boolean> = ref<boolean>(false)

    if (disable) {
        return {
            isTouch: isTouch,
            onClick: () => {
            }
        }
    }

    onClickOutside(hoverElement, event => {
        isTouch.value = false
    })

    const onClick = () => {
        isTouch.value = true
    }

    return {
        isTouch: isTouch,
        onClick: onClick
    }
}