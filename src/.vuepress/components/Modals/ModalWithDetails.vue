<template>
  <ClientOnly>
    <modal 
      :name="modalName" 
      :height="modalHeight" 
      :width="modalWidth" 
      :shift-y="0.35"
      transition="unset"
    >
      <VpIcon
        class="ml-6 mt-6"
        name="close"
        @click="hideModal"
      />
      <article 
        class="p-6 text-16" 
        :style="{
          overflowY: 'auto',
          maxHeight: '100%',
        }"
      > 
        <p
          class="text-bold font-bold text-16 mb-6"
          v-html="$localeConfig.home.heading"
        />
        <p
          class="text-16 text-content mb-16"
          v-html="$localeConfig.home.fullDescription"
        />
      </article>
    </modal>
  </ClientOnly>
</template>
<script>
    import MODAL_NAMES from '../../constants/modals';

    export default {
        data() {
            return {
                modalName: MODAL_NAMES.MODAL_WITH_DETAILS,
            };
        },
        computed: {
            modalHeight() {
                if (typeof window === 'undefined') {
                  return 0;
                }

                return ((window.innerHeight - 80) / window.innerHeight).toFixed(2) * 100 + '%';
            },
            modalWidth() {
                if (typeof window === 'undefined') {
                  return 0;
                }
                
                return ((window.innerWidth - 55) / window.innerWidth).toFixed(2) * 100 + '%';
            },
        },
        methods: {
            hideModal() {
                this.$modal.hide(MODAL_NAMES.MODAL_WITH_DETAILS);
            }
        },
    }
</script>
