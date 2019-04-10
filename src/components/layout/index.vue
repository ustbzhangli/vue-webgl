<style>
    .wrap{
        display: flex;
        height: 100%;
        flex-direction: column;
    }
    .main{/*overflow：auto，有问题应该是overflow-x：hidden;overflow-y：auto*/
        position: relative;
        flex: 1;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .main::-webkit-scrollbar{
        display: none;
    }
</style>

<template>
    <div class="wrap">
        <slot name="header"></slot>
        <main class="main">
            <slot></slot>
        </main>
        <slot name="footer"></slot>
        <slot name="overlay"></slot>
    </div>
</template>
