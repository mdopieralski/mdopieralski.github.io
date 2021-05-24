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
        class="ml-6 mt-6 absolute"
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
        v-if="product"
        class="flex flex-col h-full p-6 pt-20 text-16" 
        :style="{
          overflowY: 'auto',
          maxHeight: '100%',
        }"
      > 
        <figure class="h-0 pb-full overflow-hidden rounded-2xl mb-8">
          <img
            :alt="product.name"
            :src="product.photos[currentPhotoIndex] && product.photos[currentPhotoIndex].url || product.thumbnailUrl"
          >
        </figure>
        <div class="flex flex-col h-full justify-between">
          <div class="flex justify-between">
            <div>
              <p class="uppercase font-bold">
                {{ product.name }}
              </p>
              <p
                class="text-14"
                v-html="product.description"
              />
            </div>
            <div>
              <p class="font-bold">
                {{ product.price }}
              </p>
            </div>
          </div>
          <ul class="flex -mt-12">
            <li
              v-for="(image, index) in product.photos"
              :key="index"
              class="w-20 h-0 pb-full mr-10 overflow-hidden rounded-xl"
              style="padding-bottom: 21.229% !important;"
              @click="setPhotoPreviewIndex(index)"
            >
              <img 
                :src="image.url"
              >
            </li>
          </ul>
        </div>
      </article>
    </modal>
  </ClientOnly>
</template>
<script>
    import MODAL_NAMES from '../../constants/modals';

    export default {
        props: {
            product: {
                type: Object,
                default: null,
            },
        },
        data() {
            return {
                currentPhotoIndex: null,
                modalName: MODAL_NAMES.MODAL_SINGLE_PRODUCT,
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
            setPhotoPreviewIndex(index) {
                this.currentPhotoIndex = index;
            },
            hideModal() {
                this.$modal.hide(MODAL_NAMES.MODAL_SINGLE_PRODUCT);
                this.$emit('onModalClose');
            }
        },
    }
</script>