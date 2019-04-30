<template>
    <core-scroll-to-top v-bind="$attrs">
        <template v-slot:default="{ visible, type, controlEvents }">
            <zoom>
                <div class="button scroll-control"
                    :class="type"
                    v-on="controlEvents"
                    v-if="visible">
                    <span class="icon is-large">
                        <fa icon="arrow-alt-circle-up"/>
                    </span>
                </div>
            </zoom>
        </template>
    </core-scroll-to-top>
</template>

<script>
import { Zoom } from '@enso-ui/transitions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import CoreScrollToTop from '../renderless/CoreScrollToTop.vue';

library.add(faArrowAltCircleUp);

export default {
    name: 'ScrollToTop',

    components: { CoreScrollToTop, Zoom },
};
</script>

<style lang="scss">
    .scroll-control {
        z-index: 3;
        position: fixed;
        bottom: 2em;
        [dir='ltr'] & {
            right: 1.5em;
        }
        [dir='rtl'] & {
            left: 1.5em;
        }
    }

</style>
