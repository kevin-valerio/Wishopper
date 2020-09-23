<template>
    <div class="app-footer">
        <div class="app-footer__inner text-center">
            Copyright &copy; Wishopper.<i style="margin-left: 3px">  Ce site est optimisé pour une utilisation sur ordinateur !</i>
        </div>
    </div>
</template>

<script>

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {faEllipsisV,} from '@fortawesome/free-solid-svg-icons'

    library.add(
        faEllipsisV ,
    );
    export default {
        name: "Footer",
        components: {
        }
    };
</script>
