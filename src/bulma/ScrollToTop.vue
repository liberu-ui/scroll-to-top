<template>
    <core-scroll-to-top v-bind="$attrs">
        <template #default="{ visible, type, controlEvents }">
            <zoom>
                <div class="button scroll-control"
                    :class="[type, $attrs.class]"
                    v-on="controlEvents"
                    v-if="visible">
                    <slot>
                        <span class="icon is-large">
                            <fa icon="arrow-alt-circle-up"/>
                        </span>
                    </slot>
                </div>
            </zoom>
        </template>
    </core-scroll-to-top>
</template>

<script>
import { Zoom } from '@enso-ui/transitions';
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import CoreScrollToTop from '../renderless/CoreScrollToTop.vue';

library.add(faArrowAltCircleUp);

export default {
    name: 'ScrollToTop',

    components: { CoreScrollToTop, Fa, Zoom },
};
</script>

<style lang="scss">
    .scroll-control {
        z-index: 3;
        position: fixed;
        bottom: 3em;

        @media screen and (min-width: 769px) {
            [dir='ltr'] & {
                right: 1.5em;
            }
            [dir='rtl'] & {
                left: 1.5em;
            }
        }
        @media screen and (max-width: 768px) {
            [dir='ltr'] & {
                right: 0.5em;
            }
            [dir='rtl'] & {
                left: 0.5em;
            }
        }
    }

</style>
