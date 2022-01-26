const path = require("path");
const MyWebpackPlugin = require("./my-webpack-plugin")
const webpack = require("webpack")
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
                test:/\.css$/,
                //사용할 로더 명시
                //뒤에서부터 앞으로 실행(css->style)
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                //적은 용량은 url base encoding해서 사용
                test:/\.(png|jpg)$/,
                loader:"url-loader",
                options:{
                    publicPath:'./dist/',
                    name: '[name].[ext]?[hash]',
                    limit: 20000,//20kb
                }
                
            }
        ]
    },
    plugins:[
        // new MyWebpackPlugin()
        new webpack.BannerPlugin({
            banner:"이건 배너양"
        })
    ]
}