const base = {
    get() {
        const apiHost = process.env.VUE_APP_API_HOST || 'localhost';
        const apiPort = process.env.VUE_APP_API_PORT || '8080';
        const projectName = process.env.VUE_APP_PROJECT_NAME || 'springboot7z60r';

        return {
            url : `http://${apiHost}:${apiPort}/${projectName}/`,
            name: projectName,
            // 退出到首页链接
            indexUrl: `http://${apiHost}:${apiPort}/${projectName}/front/index.html`
        };
    },
    getProjectName(){
        return {
            projectName: "网上商城购物系统"
        }
    }
}
export default base
