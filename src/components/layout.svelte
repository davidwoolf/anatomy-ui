<div class="sm:grid grid-cols-[48rem_1fr]">
  <div class="col-start-1">
    <slot name="title" />
  </div>

  <div class="col-start-1">
    <slot name="description" />
  </div>

  <div class="col-start-1">
    <slot name="contents" />
  </div>

  <div class="col-start-2 row-start-2 flex items-center justify-center">
    <slot name="sidebar" />
  </div>
</div>
