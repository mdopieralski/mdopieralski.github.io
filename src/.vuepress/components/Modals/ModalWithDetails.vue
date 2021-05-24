<template>
  <ClientOnly>
    <modal 
      :name="modalName" 
      :height="modalHeight" 
      :width="modalWidth" 
      :shift-y="0.35"
      transition="unset"
    >
      <svg 
        class="ml-6 mt-6"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="hideModal"
      >
        <rect
          y="2.8125"
          width="3.97747"
          height="17.2357"
          rx="1.98874"
          transform="rotate(-45 0 2.8125)"
          fill="black"
        />
        <rect
          x="12.1875"
          width="3.97747"
          height="17.2357"
          rx="1.98874"
          transform="rotate(45 12.1875 0)"
          fill="black"
        />
      </svg>
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
