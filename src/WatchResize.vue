<template>
<div>
  <slot></slot>
</div>
</template>

<script lang="ts">
// --- Imports -------------------------------------------------------------- //

import { Subscription } from 'rxjs';
import Vue, { VueConstructor } from 'vue';
import { watchResize } from 'watch-resize';

// -------------------------------------------------------------------------- //

export interface WatchResizeData {
  elResizeSubscription: Subscription | null;
}

export default Vue.extend({
  name: 'WatchResize',

  data(): WatchResizeData {
    return {
      elResizeSubscription: null,
    };
  },

  props: {
    transitionDuration: { type: Number, default: 200 },
    transitionTimingFunction: { type: String, default: 'ease' },
    transitionDelay: { type: Number, default: 0 },
    noTransition: Boolean,
  },

  mounted() {
    this.watchElForResize();
  },

  beforeDestroy() {
    if (this.elResizeSubscription) this.elResizeSubscription.unsubscribe();
    this.elResizeSubscription = null;
  },

  methods: {
    async watchElForResize() {
      await this.$nextTick();

      const resize$ = await watchResize(this.$el as HTMLDivElement);
      this.elResizeSubscription = resize$.subscribe(({ event }) => {
        this.$emit('resize', event);
      });
    },
  },
});
</script>


