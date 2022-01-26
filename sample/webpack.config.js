const path = require("path");

module.exports = {
    mode : "development",
    
    //엔트리는 자바스크립트 모듈이 여러개 의존관계가있는데 그 의존관계가 있는 모듈의 첫번쨰 시작점을 나타냄. 시작점을 기준으로 파일을 찾아 번들링
    entry : {
        main: './src/app.js',
    },
    //번들링한 결과를 아웃풋에 설정함.
    output: {
        path: path.resolve("./dist"),
        filename: '[name].js'
    },
    
    module:{
        //로더를 추가
        rules:[
            {
                //로더가 처리해야하는 파일들의 패턴.
                test:/\.js$/,
                //사용할 로더 명시
                use:[
                    path.resolve("./my-webpack-loader.js")
                ]
            }
        ]
    }

}