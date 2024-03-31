const fs = require("fs");
const { exec } = require("child_process");

// https://hx.dcloud.net.cn/cli/pack

const env = process.argv[2]; // 获取命令行参数
/**
 * @param {String} BASEURL api 接口
 *  @param {String} text  服务器图片地址
 **/
const CONFIGENV = {
  dev: {
    BASEURL: "http://api-test.n4.mget.cn/api",
    TEXT: "测试版",
  },
  prod: {
    BASEURL: "https://api-test.mget.cn/api",
    TEXT: "正式版",
  },
};

// 将环境配置对象写入文件
function writeConfigToFile(config) {
  const json = JSON.stringify(config, null, 2);
  fs.writeFile("env-config.js", `module.exports = ${json}`, (err) => {
    if (err) throw err;
    const envText = env === "dev" ? "测试环境" : "正式环境";
    console.log(`配置文件已经被写入（${envText}）`);
  });
}

// 执行 uni-app 安卓打包命令
function buildAndroid() {
  // const uniCli = "cli pack  --config F:\\developer\\test\\test\\configure.json"
  const uniCli =
    "cli pack --project test --platform android --safemode false --android.packagename io.test --android.androidpacktype 0 --android.certalias testalias --android.certfile /Users/hx/Desktop/cert/jdk13/test.key --android.certpassword 123456";
  exec(uniCli, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行 uni-app 安卓打包命令时出错: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`执行 uni-app 安卓打包命令时出错: ${stderr}`);
      return;
    }
    console.log("uni-app 安卓打包完成");
  });
}

// 主函数
function main() {
  try {
    writeConfigToFile(CONFIGENV[env]);
    console.log(`环境配置文件已成功创建并写入：env-config.js`);
    // 写入完成后调起 uni-app 安卓打包
    buildAndroid();
  } catch (err) {
    console.error(err.message);
  }
}

main(); // 执行主函数
