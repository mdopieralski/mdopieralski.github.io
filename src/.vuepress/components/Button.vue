<template>
  <Component 
    :is="isAnchor ? 'a' : 'button'"
    :href="href"
    :type="isAnchor ? null : 'button'"
    class="block border-2 w-full uppercase mb-4 text-16 text-center py-3 rounded-full"
  >
    <slot />
  </Component>
</template>
<script>
    export default {
        props: {
            href: {
              type: String,
              required: false,
              default: null,
            },
        },
        data (){
            return {
                isAnchor: !!this.href,
            }
        }
    }
</script>