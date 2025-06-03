// 生产环境配置文件示例
// 部署到生产环境时，请将此文件重命名为 env-config.js 并修改相应的配置
window.ENV_CONFIG = {
    // API服务器配置 - 请修改为实际的生产环境地址
    API_HOST: 'your-production-host.com',
    API_PORT: '8080',
    PROJECT_NAME: 'springboot7z60r',
    
    // 获取完整的API基础URL
    getApiBaseUrl: function() {
        return 'http://' + this.API_HOST + ':' + this.API_PORT + '/' + this.PROJECT_NAME + '/';
    },
    
    // 获取管理后台URL
    getAdminUrl: function() {
        return 'http://' + this.API_HOST + ':' + this.API_PORT + '/' + this.PROJECT_NAME + '/admin/dist/index.html';
    }
};
