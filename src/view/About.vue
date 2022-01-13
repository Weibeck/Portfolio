<template>
    
    <div class="popup">
        <div class="popup-inner">
            <button class="popup-close">
                Close Window
            </button>

        </div>
    </div>

</template>
<script>
export default {

}
</script>
<style lang="scss">
    .popup{
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba($color: white, $alpha: 0.2);
        display: flex;
        align-items: center;
        justify-content: center;

        .popup-inner{
            background: #FFF;
            padding: 32px;
        }
    }

</style>