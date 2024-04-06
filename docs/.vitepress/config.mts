import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";
import './style/index.css';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '517Group', //站点标题
    description: '517Group',//mate标签description，多用于搜索引擎抓取摘要
    base: "",
    markdown:
    { 
        lineNumbers: true, 
        config: (md) => {
        md.use(timeline);
        },
    }, 
    themeConfig:
    {
        nav:
        [
            {text: 'Ex517',link:"https://517group.cn"},
            {
                text: '历代皇帝',
                items:
                [
                    {
                        text: 'zMr',
                        items:
                        [
                            { text: '博客', link: 'https://minecraftdream12345.github.io/' },
                            { text: 'Email', link: 'mailto:zhoumouren2010@outlook.com' }
                        ]
                    },
                    {
                        text: 'wsq127',
                        items:
                        [
                            { text: '主页', link: 'https://wsq127.top/' },
                            { text: 'Email', link: 'mailto:admin@wsq127.top' }
                        ]
                    },
                    {
                        text: 'jdt1010',
                        items:
                        [
                            { text: '洛谷', link: 'https://www.luogu.com.cn/user/736652' },
                            { text: 'Email', link: 'mailto:jdt1010@126.com' }
                        ]
                    },
                    {
                        text: 'sxr',
                        items:
                        [
                            { text: '主页', link: 'https://jiuci.top/' },
                            { text: 'Email', link: 'mailto:13625126063@163.com' }
                        ]
                    },
                    {
                        text: 'Xwty',
                        items:
                        [
                            { text: '洛谷', link: 'https://www.luogu.com.cn/user/927883' },
                            { text: 'Email', link: 'mailto:274678666@qq.com' }
                        ]
                    },
                ]
            }
        ],
        sidebar:
        [
            {
                text: '团队简介', link: '/start'
            },
            {
                text: '编年史',
                items:
                [
                    { text: '始皇 · zMr', link: '/histories1' },
                    { text: '二世 · wsq127', link: '/histories2' },
                    { text: '三世 · jdt1010', link: '/histories3' },
                    { text: '四世 · 7_DK', link: '/histories4' },
                    { text: '五世 · Xwty', link: '/histories5' },
                ]
            },
            {
                text: '法律',
                items:
                [
                    { text: '宪法', link: '/legislation1' },
                    { text: '刑法', link: '/legislation2' },
                ]
            }
        ]
    }
})
