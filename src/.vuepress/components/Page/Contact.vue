<template>
  <article
    class="
    [ pt-48 h-full ]
    [ mobile:container ]
    [ tablet:pt-80 ]
    [ desktop:grid desktop:grid-cols-3 desktop:gap-36 desktop:h-full ]
    "
  >
    <DisplayMedia :displays="['desktop']">
      <div>
        <IconLogo style="width:236px; height: 292px;" />
      </div>
    </DisplayMedia>
    <div
      class="
      [ flex flex-col h-full max-w-lg mx-auto ]
      [ tablet:justify-center ]
      [ desktop:block desktop:max-w-none desktop:mx-0 ]
      "
    >
      <div>
        <a 
          class="flex pb-8 mb-8 border-b"
          :href="`tel:${$localeConfig.contact.phone}`"
        >
          <IconPlay class="mr-8" />
          <span class="text-14">
            {{ $localeConfig.contact.phone }}
          </span>
        </a>
        <a
          class="flex pb-8 mb-8 border-b"
          :href="`mailto:${$localeConfig.contact.email}`"
        >
          <IconStop class="mr-8" />
          <span class="text-14">
            {{ $localeConfig.contact.email }}
          </span>
        </a>
        <div
          class="
          [ flex mb-16 ]
          [ tablet:flex-col ]
        "
        >
          <div class="flex">
            <svg
              class="mr-8"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="19"
                height="19"
                rx="9.5"
                fill="black"
              />
            </svg>
            <span class="text-14 font-bold">
              NEATUAL 
            </span>
          </div>
          <span
            class="
              [ ml-auto text-14 ]
              [ tablet:ml-0 tablet:mt-6 ]
            "
            v-html="$localeConfig.contact.address"
          />
        </div>
      </div>
      <DisplayMedia :displays="['mobile', 'tablet']">
        <div>
          <Button href="mailto:kontakt@netual.com"> 
            {{ $localeConfig.contact.message }}
          </Button>
          <Button :href="`tel:${$localeConfig.contact.phone}`"> 
            {{ $localeConfig.contact.call }}
          </Button>
        </div>
      </DisplayMedia>
    </div>
    <DisplayMedia :displays="['desktop']">
      <div>
        <Button 
          :href="`mailto:${$localeConfig.contact.email}`"
        > 
          {{ $localeConfig.contact.message }}
        </Button>
        <Button 
          :href="`tel:${$localeConfig.contact.phone}`"
        > 
          {{ $localeConfig.contact.call }}
        </Button>
      </div>
    </DisplayMedia>
  </article>
</template>
<script>
    import Button from '../Button.vue';
    import DisplayMedia from '../DisplayMedia';
    import IconLogo from '../Svgs/IconLogo';
    import IconPlay from '../Svgs/IconPlay';
    import IconStop from '../Svgs/IconStop';

    export default {
        components: {
            Button,
            DisplayMedia,
            IconLogo,
            IconPlay,
            IconStop,
        }
    }
</script> 