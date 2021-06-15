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
        <VpIcon 
          style="width:236px; height: 292px;"
          name="logo" 
        />
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
          <VpIcon
            class="mr-8 w-8 h-8"
            name="play" 
          />
          <span class="text-14">
            {{ $localeConfig.contact.phone }}
          </span>
        </a>
        <a
          class="flex pb-8 mb-8 border-b"
          :href="`mailto:${$localeConfig.contact.email}`"
        >
          <VpIcon 
            class="mr-8 w-8 h-8"
            name="stop" 
          />
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
            <VpIcon 
              class="mr-8 w-8 h-8"
              name="dott" 
            />
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

    export default {
        components: {
            Button,
            DisplayMedia,
        }
    }
</script> 