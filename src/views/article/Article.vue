<template>
    <div class="aside-menu-hr">
        <el-affix :offset="0">
            <el-button @click="back">
                <font-awesome-icon icon="fa-solid fa-chevron-left" />
            </el-button>
        </el-affix>
    </div>
    <el-container>
        <el-aside class="aside-menu-vt">

        </el-aside>
        <el-container>
            <el-main class="content">
                <div class="article-title">
                    <el-text tag="b">{{ article.title }}</el-text>
                </div>
                <div class="article-userinfo">
                    <el-tag>{{ user.userName }}</el-tag>
                </div>
                <div class="article-info">
                    <el-text type="info" size="small">{{ createTime }}</el-text>
                </div>
                <div class="article-content">
                    <div v-html="content" class="markdown-body"></div>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>


<script>
import { getArticleById } from "@/http/article";
import { getUserInfo } from "@/http/user";
import hljs from "highlight.js";
import { marked } from "marked";
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/github-dark.css";

export default {
    async mounted() {
        this.id = this.$route.params.id;
        await getArticleById(this.id).then(res => {
            this.article = res.data.article;
        });
        await getUserInfo(this.article.userinfoId).then(res => {
            this.user = res.data.userinfo;

            const backendTime = this.article.createTime;

            const year = backendTime.slice(0, 4);
            const month = backendTime.slice(5, 7);
            const day = backendTime.slice(8, 10);
            const hours = backendTime.slice(11, 13);
            const minutes = backendTime.slice(14, 16);
            const seconds = backendTime.slice(17, 19);

            const formattedTime = year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds;

            this.createTime = formattedTime;
            // 输出: 2023-11-07 03:37:43

            this.article.content = marked(this.article.content);
            hljs.highlightAll(); 
        });
    },
    data() {
        return {
            id: 0,
            user: {},
            createTime: "",
            article: {},
        }
    },
    computed: {
        content() {
            return this.article.content;
        }
    },
    methods: {
        back() {
            this.$router.back();
        }
    }
}
</script>




<style>
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}


.article-title {
    text-align: left;
}

.article-title .el-text {
    font-size: 22px;
}

.article-userinfo {
    margin-top: 16px;
    margin-bottom: 8px;
}

.article-info {
    margin-bottom: 16px;
}
</style>