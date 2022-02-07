<template lang="">
<transition name="modal-fade">
<div class="modal-backdrop" @click="close">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">

        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          &#x2716;
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          Body
        </slot>
       </section>

      <footer class="modal-footer">
        <slot name="footer">
          
        </slot>
        <a href="https://www.linkedin.com/in/mathias-weibeck-60855618b/">
        <button
          type="button"
          class="btn-linkedin">
        <fa :icon="['fab', 'linkedin']" size="2xl"/>
          Connect With Me
        </button>
        </a>
      </footer>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
}
</script>
<style lang="scss">
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #121212;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 82%;
    height: 95%;
  }

  .modal-header,
  .modal-footer {
    padding: 10px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #242526;
    color: #FFFFFF;
    justify-content: center;
    font-weight: bold;
    font-size: 1.4em;
    padding: 20px;
  }

  .modal-footer {
    border-top: 1px solid #242526;
    align-items: center;
    justify-content: space-around;
  }

  .modal-body {
    position: relative;
    color: #E4E6EB;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding-right: 15px;
    padding-top: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #B3B3B3;
    background: transparent;
  }
  .btn-close:hover{
    color: whitesmoke;
  }

  .btn-linkedin {
    color: #B3B3B3;
    background: transparent;
    border-radius: 2px;
    font-size: 24px;
    text-align: left;
  }
  
  .btn-linkedin:hover{
    color: whitesmoke;
  }

  
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>