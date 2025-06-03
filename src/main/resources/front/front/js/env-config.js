// 环境配置文件
// 可以通过修改这个文件来配置不同环境的API地址
window.ENV_CONFIG = {
    // API服务器配置
    API_HOST: 'localhost',
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

// 从环境变量或URL参数中读取配置（如果有的话）
(function() {
    // 尝试从URL参数中读取配置
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('api_host')) {
        window.ENV_CONFIG.API_HOST = urlParams.get('api_host');
    }
    if (urlParams.get('api_port')) {
        window.ENV_CONFIG.API_PORT = urlParams.get('api_port');
    }
    if (urlParams.get('project_name')) {
        window.ENV_CONFIG.PROJECT_NAME = urlParams.get('project_name');
    }
})();
