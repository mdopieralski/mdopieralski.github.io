<template>
  <header
    class="
      [ fixed top-0 left-0 pt-12 w-full ]
      [ tablet:bg-background tablet:pt-20 ]
    "
  >
    <div
      class="
      [ flex justify-between  ]
      [ mobile:container tablet:container desktop:container ]
    "
    >
      <div class="desktop:w-1/3">
            
        <a :href="$parseHref(homeRoute)">
          <span 
            v-show="showTextLogo" 
            class="font-logo text-18 mr-auto"
          >
            netual.com
          </span>
          <VpIcon
            v-show="showSvgLogo" 
            class="
              [ mr-auto ]
              [ tablet:h-auto tablet:w-36 ]
              "
            name="logo"
          />
        </a>
      </div>
      <div class="desktop:w-2/3 desktop:flex desktop:px-36">
        <ul 
          v-show="showContact"
          class="flex w-2/3"
        >
          <li class="w-1/2">
            <a 
              class="flex"
              :href="`tel:${$localeConfig.contact.phone}`"
            >
              <VpIcon 
                name="play" 
                class="mr-8 w-8 h-8" 
              />
              <span class="text-14">
                {{ $localeConfig.contact.phone }}
              </span>
            </a>
          </li>
          <li class="w-1/2">
            <a
              class="flex"
              :href="`mailto:${$localeConfig.contact.email}`"
            >
              <VpIcon 
                name="stop" 
                class="mr-8 w-8 h-8" 
              />
              <span class="text-14">
                {{ $localeConfig.contact.email }}
              </span>
            </a>
          </li>
        </ul>
        <nav class="desktop:w-1/3 flex ml-auto">
          <ul class="flex ml-auto">
            <li 
              v-for="(item, index) in languages"
              :key="item.href"
            >
              <a 
                :href="$parseHref(item.href)"
                :class="{
                  'font-black': item.label === currentLang,
                }"
              >
                {{ item.label }}
                {{ languages.length - 1 !== index ? '&nbsp;|&nbsp;' : '' }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
    import { mapGetters } from 'Vuex';

    import { LANG_CODES } from '../constants/languages';
    import { ROUTE_NAMES, ROUTES } from '../constants/routes';
    import { getCurrentRouteName, getCurrentLanguage } from '../utils';

    export default {
        data() {
            const currentRouteName = getCurrentRouteName();
            const currentLang = getCurrentLanguage();

            console.log({
                currentRouteName,
                currentLang,
                homeRoute: ROUTES[ROUTE_NAMES.HOME][currentLang], 
                languages: [
                    {
                        label: LANG_CODES.PL,
                        href: ROUTES[currentRouteName].PL,
                    },
                    {
                        label: LANG_CODES.EN,
                        href: ROUTES[currentRouteName].EN,
                    },
                    {
                        label: LANG_CODES.DE,
                        href: ROUTES[currentRouteName].DE,
                    }
                ]
            });
            return {
                currentRouteName,
                currentLang,
                homeRoute: ROUTES[ROUTE_NAMES.HOME][currentLang], 
                languages: [
                    {
                        label: LANG_CODES.PL,
                        href: ROUTES[currentRouteName].PL,
                    },
                    {
                        label: LANG_CODES.EN,
                        href: ROUTES[currentRouteName].EN,
                    },
                    {
                        label: LANG_CODES.DE,
                        href: ROUTES[currentRouteName].DE,
                    }
                ]
            }
        },
        computed: {
            ...mapGetters({
                isMobile: 'ui/isMobile',
                isTablet: 'ui/isTablet',
                isDesktop: 'ui/isDesktop',
            }),
            isHomePage() {
              return this.currentRouteName === ROUTE_NAMES.HOME;
            },
            isGalleryPage() {
              return this.currentRouteName === ROUTE_NAMES.GALLERY;
            },
            isContactPage() {
              return this.currentRouteName === ROUTE_NAMES.CONTACT;
            },
            showContact() {
                return this.isDesktop && !this.isContactPage;
            },
            showTextLogo() {
                if (this.isMobile && this.isHomePage) {
                    return true;
                }

                if (this.isTablet && this.isHomePage) {
                    return true;
                }

                if (this.isDesktop && !this.isGalleryPage) {
                    return true;
                }

                return this.isHomePage;
            },
            showSvgLogo() {
                if (this.isMobile && !this.isHomePage) {
                    return true;
                }

                if (this.isTablet && !this.isHomePage) {
                   return true;
                }

                if (this.isDesktop && this.isGalleryPage) {
                  return true;
                }

                return false;
            },
        },
    }
</script> 