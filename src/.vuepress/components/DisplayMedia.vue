<script>
    import DEVICES from '../constants/devices';
    import { mapState } from 'vuex'

    export default {
        props: {
            displays: {
                type: Array,
                default: () => ([]),
                validator: value => value.every(item => Object.values(DEVICES).includes(item)),
            },
        },
        computed: {
            ...mapState({
                deviceType: state => state.ui.deviceType,
            }),
        },
        render() {
            if (!this.displays.includes(this.deviceType)) {
                return;
            }

            return this.$slots.default;
        }
    }
</script>
