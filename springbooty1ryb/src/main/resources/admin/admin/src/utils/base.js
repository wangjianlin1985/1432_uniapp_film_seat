const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooty1ryb/",
            name: "springbooty1ryb",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooty1ryb/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "影院线上订票小程序"
        } 
    }
}
export default base
