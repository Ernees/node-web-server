
const {envs} = require('./config/env.js')
const {startServer} = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH
    })
}

(async()=>{
    main()
})()
