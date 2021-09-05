export const ClickOutside = {
  beforeMount: function (el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };

    document.body.addEventListener("touchstart", el.clickOutsideEvent);
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  beforeUnmount: function (el) {
    document.body.removeEventListener("touchstart", el.clickOutsideEvent);
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};
