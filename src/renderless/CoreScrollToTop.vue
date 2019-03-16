<script>
export default {
    name: 'CoreScrollToTop',

    props: {
        type: {
            type: String,
            default: null,
        },
    },

    data: () => ({
        visible: false,
        requestId: null,
        position: null,
    }),

    mounted() {
        const onScroll = () => {
            const position = Math.max(
                document.body.scrollTop,
                document.documentElement.scrollTop,
            );

            if (position > this.position) {
                window.cancelAnimationFrame(this.requestId);
            }

            this.position = position;

            this.visible = this.position > 100;
        };

        window.addEventListener('scroll', onScroll);

        this.$once('hook:destroyed', () => {
            window.removeEventListener('scroll', onScroll);
        });
    },

    methods: {
        scroll() {
            const height = document.documentElement.scrollTop || document.body.scrollTop;

            if (height > 0) {
                window.scrollTo(0, height - height / 10);
                this.requestId = window.requestAnimationFrame(this.scroll);
            }
        },
    },

    render() {
        return this.$scopedSlots.default({
            visible: this.visible,
            type: this.type,
            controlEvents: {
                click: this.scroll,
            },
        });
    },
};
</script>
