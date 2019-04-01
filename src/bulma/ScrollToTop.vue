<template>
    <core-scroll-to-top v-bind="$attrs">
        <template v-slot:default="{ visible, type, controlEvents }">
            <zoom>
        <s-scroll-to-top :isRTL='isRTL'>
                <div class="button"
                    :class="type"
                    v-on="controlEvents"
                    v-if="visible">
                    <span class="icon is-large">
                        <fa icon="arrow-alt-circle-up"/>
                    </span>
                </div>
        </s-scroll-to-top>
            </zoom>
        </template>
    </core-scroll-to-top>
</template>

<script>
import { Zoom } from '@enso-ui/transitions';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import CoreScrollToTop from '../renderless/CoreScrollToTop.vue';
import SScrollToTop from './styled/SScrollToTop';

library.add(faArrowAltCircleUp);

export default {
    name: 'ScrollToTop',

    props:{
        isRTL:{
            type: Boolean,
            default: false,
        },
    },

    components: { CoreScrollToTop, Zoom, SScrollToTop },
};
</script>
