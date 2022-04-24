import { defineConfig, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import clunchLoader from 'clunch/loader';

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
    return {
        base: './',
        plugins: [
            react(), {
                name: 'clunch',
                transform(code, filename) {

                    // .clunch文件
                    if (/\.clunch$/.test(filename)) {
                        return clunchLoader(code);
                    }

                }
            }
        ],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: '/src'
                }
            ]
        },
        build: {
            terserOptions: {
                compress: {
                    drop_console: true
                }
            },
            outDir: 'docs', //指定输出路径
            assetsDir: 'assets', //指定生成静态资源的存放路径
            minify: 'terser'
        }
    };
});
