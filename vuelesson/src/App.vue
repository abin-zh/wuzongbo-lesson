<template>
    <el-container>
        <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                @select="handleSelect">
                <el-menu-item index="0">
                    <div>
                        <font-awesome-icon icon="fa-regular fa-face-dizzy" size="2xl" />
                    </div>
                </el-menu-item>
                <div class="flex-grow" />
                <el-menu-item index="1"><router-link to="/">主页</router-link></el-menu-item>
                <el-menu-item index="2"><router-link to="/about">关于</router-link></el-menu-item>
                <el-menu-item index="3">
                    <div>
                        <el-switch v-model="swiDark" size="small" @click="switchThemes">
                        </el-switch>
                    </div>
                </el-menu-item>
                <el-menu-item index="4">
                    <div>
                        <a href="https://github.com/abin-zh/wuzongbo-lesson">
                            <font-awesome-icon icon="fa-brands fa-github" size="xl" />
                        </a>
                    </div>
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-container>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()

export default {
    name: 'App',
    data() {
        return {
            swiDark: ref(isDark.value)
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

<style scoped>
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
