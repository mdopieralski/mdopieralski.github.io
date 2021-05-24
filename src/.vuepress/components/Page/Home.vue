<template>
  <article 
    class="
      [ container flex flex-col h-full overflow-auto pt-32 ]
      [ tablet:mt-16 ] 
      [ desktop:flex-row desktop:mt-0 desktop:justify-center desktop:pt-80 desktop:h-auto ]
      "
  >
    <figure
      class="
        [ mb-12 ] 
        [ tablet:mb-24 ] 
        [ desktop:flex desktop:mb-0 desktop:w-1/3 desktop:pr-40 ]
      "
    >
      <IconLogo 
        class="
          [ w-32 h-auto ]
          [ tablet:mx-auto tablet:w-56 ]
          [ desktop:w-full ]
        " 
      />
    </figure>
        
    <DisplayMedia :displays="['mobile']">
      <div>
        <p
          class="text-bold font-bold text-16 mb-6"
          v-html="$localeConfig.home.heading"
        />
        <p
          class="text-16 text-content mb-6"
          v-html="$localeConfig.home.shortDescription"
        />
        <button 
          class="ml-auto bg-white flex font-bold h-10 items-center justify-center rounded-full text-center w-10 text-14 leading-5"
          type="button"
          @click="showModal"
        >
          •••
        </button>
        <ModalWithDetails />
      </div>
    </DisplayMedia>

    <DisplayMedia :displays="['tablet', 'desktop']">
      <div class="desktop:px-36 desktop:w-2/3"> 
        <p class="hidden font-logo text-38 mb-8 desktop:block">
          netual
        </p>
        <p
          class="text-bold font-bold text-16 mb-6"
          v-html="$localeConfig.home.heading"
        />
        <p
          class="text-16 text-content mb-16"
          v-html="$localeConfig.home.fullDescription"
        />
        <ul 
          class="hidden tablet:flex tablet:flex-col desktop:hidden"
        >
          <li class="mb-8">
            <a 
              class="flex"
              :href="`tel:${$localeConfig.contact.phone}`"
            >
              <IconPlay class="mr-8" />
              <span class="text-14">
                {{ $localeConfig.contact.phone }}
              </span>
            </a>
          </li>
          <li>
            <a
              class="flex"
              :href="`mailto:${$localeConfig.contact.email}`"
            >
              <IconStop class="mr-8" />
              <span class="text-14">
                {{ $localeConfig.contact.email }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </DisplayMedia>
  </article>
</template>
<script>
    import MODAL_NAMES from '../../constants/modals';
    import ModalWithDetails from '../Modals/ModalWithDetails';
    import DisplayMedia from '../DisplayMedia';
    import IconLogo from '../Svgs/IconLogo';
    import IconPlay from '../Svgs/IconPlay';
    import IconStop from '../Svgs/IconStop';

    export default {
        components: { 
            DisplayMedia, 
            IconLogo, 
            IconPlay, 
            IconStop, 
            ModalWithDetails, 
        },
        methods: {
            showModal() {
                this.$modal.show(MODAL_NAMES.MODAL_WITH_DETAILS);
            },
        },
    }
</script>