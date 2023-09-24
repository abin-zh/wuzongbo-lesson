<template>
    <el-container>
        <el-header>
            <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" router>
                <el-menu-item>
                    <div>
                        <font-awesome-icon icon="fa-regular fa-face-dizzy" size="2xl" />
                    </div>
                </el-menu-item>
                <div class="flex-grow" />
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/about">关于</el-menu-item>
                <!-- 切换主题 -->
                <el-menu-item>
                    <div>
                        <el-switch v-model="swiDark" size="small" @click="switchThemes">
                        </el-switch>
                    </div>
                </el-menu-item>
                <el-menu-item>
                    <div>
                        <a href="https://github.com/abin-zh/wuzongbo-lesson">
                            <font-awesome-icon icon="fa-brands fa-github" size="2xl" />
                        </a>
                    </div>
                </el-menu-item>
            </el-menu>
        </el-header>
            <router-view></router-view>
    </el-container>
</template>

<script>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()

export default {
    name: 'App',
    created(){
        this.activeIndex = '/';
    },
    data() {
        return {
            swiDark: ref(isDark.value),
            activeIndex:'/'
        }
    },
    methods: {
        switchThemes() {
            //参考https://www.cnblogs.com/libaiyun/p/16462465.html
            const toggleDark = useToggle(isDark)
            toggleDark()
        }
    }
}
</script>

<style>
    .el-container {
        width: 100%;
        height: 100%;
    }

    .el-header,
    .el-main {
        padding: 0;
    }

    .el-menu {
        padding: 0 32px;
    }

    .flex-grow {
        flex-grow: 1;
    }
</style>
