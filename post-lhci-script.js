const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf"); // 用于删除目录
const reportDir = "./lhci-reports";
const readmeFile = "./README.md";
const outputJsonFile = "./lhci-report.json";

// 读取LHCI报告文件
const reportPath = path.join(reportDir, "manifest.json");
if (fs.existsSync(reportPath)) {
  const reportData = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  console.log(reportData);
  // 从报告中提取有用的信息
  const summary = {
    performance: reportData[0].summary.performance,
    accessibility: reportData[0].summary.accessibility,
    bestPractices: reportData[0].summary["best-practices"],
    seo: reportData[0].summary.seo,
  };

  // 保存到JSON文件
  fs.writeFileSync(outputJsonFile, JSON.stringify(summary, null, 2));

  // 或者将数据追加到README.md
  const summaryText = `
  
## Lighthouse CI Report

- Performance: ${summary.performance * 100}
- Accessibility: ${summary.accessibility * 100}
- Best Practices: ${summary.bestPractices * 100}
- SEO: ${summary.seo * 100}
`;

  fs.appendFileSync(readmeFile, summaryText);

  // 删除 lhci-reports 目录
  rimraf.sync(reportDir);

  console.log("LHCI report processed and lhci-reports directory deleted.");
} else {
  console.error(
    "LHCI report not found. Ensure that the LHCI run was successful."
  );
}
