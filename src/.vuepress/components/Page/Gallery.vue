<template>
  <article
    class="
    [ flex h-full pb-12 pt-36 ]
    [ mobile:container ]
    [ desktop:pt-80 desktop:pb-0 ]
    "
  >
    <div class="w-1/3">
      <ul
        class="
            [ grid grid-cols-2 gap-4 ]
            [ desktop:grid-cols-3 desktop:overflow-y-auto desktop:h-full ]
        "
      >
        <li 
          v-for="(item, index) in products"
          :key="index"
          class="border-2 border-black border-opacity-0 h-0 overflow-hidden cursor-pointer rounded-2xl pb-full relative"
          :class="{
            'border-opacity-100': currentProductIndex === index
          }"
          @click="openProduct(index)"
        >
          <img
            :src="item.thumbnailUrl"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
        </li>
      </ul>
    </div>
    <div class="w-2/3 flex px-36">
      <div class="w-1/2">
        <figure class="h-0 pb-full overflow-hidden rounded-2xl mb-8 relative">
          <img
            :alt="currentProduct.name"
            :src="currentProduct.photos[currentPhotoIndex] && currentProduct.photos[currentPhotoIndex].url || currentProduct.thumbnailUrl"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
        </figure>
      </div>
      <div class="w-1/2 pl-16">
        <div class="flex flex-col">
          <div class="flex justify-between mb-16">
            <div>
              <p class="uppercase font-bold text-16">
                {{ currentProduct.name }}
              </p>
              <p
                class="text-14"
                v-html="currentProduct.description"
              />
            </div>
            <div>
              <p class="font-bold text-16">
                {{ currentProduct.price }}
              </p>
            </div>
          </div>
          <ul class="flex">
            <li
              v-for="(image, index) in currentProduct.photos"
              :key="index"
              class="w-20 h-0 pb-full mr-10 overflow-hidden rounded-xl cursor-pointer relative"
              @click="setCurrentPhotoIndex(index)"
            >
              <img 
                :src="image.url"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ModalSingleProduct 
      :product="currentProduct"
      @onClose="onModalClose"
    />
  </article>
</template>
<script>
    import { mapGetters } from 'Vuex';
    import MODAL_NAMES from '../../constants/modals';
    import ModalSingleProduct from '../Modals/ModalSingleProduct';

    const createProduct = (index) => ({
        name: `Wzór nr ${index}`,
        price: 'XX PLN',
        description: '50% bawełna / 50% len<br>Uszyto w Polsce.',
        thumbnailUrl: `/gallery/${index}/produkt-${index}-1.jpg`,
        photos: [
            {
                url: `/gallery/${index}/produkt-${index}-1.jpg`,
            }, 
            {
                url: `/gallery/${index}/produkt-${index}-2.jpg`,
            }, 
            {
                url: `/gallery/${index}/produkt-${index}-3.jpg`,
            },
            {
                url: `/gallery/${index}/produkt-${index}-4.jpg`,
            },
        ]
    });

    export default {
        components: {
            ModalSingleProduct,
        },
        data() {
            return {
                currentProductIndex: 0,
                currentPhotoIndex: 0,
                products: [
                    createProduct(1),
                    createProduct(2),
                    createProduct(3),
                    createProduct(4),
                    createProduct(5),
                    createProduct(6),
                    createProduct(7),
                    createProduct(8),
                    createProduct(9),
                    createProduct(10),
                    createProduct(11),
                    createProduct(12),
                    createProduct(13),
                ],
            };
        },
        computed: {
            ...mapGetters({
                isMobile: 'ui/isMobile',
            }),
            currentProduct() {
                return this.products[this.currentProductIndex];
            },
        },
        methods: {
            setCurrentPhotoIndex(index) {
                this.currentPhotoIndex = index;
            },
            openProduct(index){ 
                this.currentProductIndex = index;

                if (this.isMobile) {
                    this.$modal.show(MODAL_NAMES.MODAL_SINGLE_PRODUCT);
                }
            },
            onModalClose() {
                this.currentProductIndex = null;
            }
        },
    }
</script>