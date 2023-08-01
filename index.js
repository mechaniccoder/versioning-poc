const { execSync } = require("child_process");

async function run() {
  const tags = execSync("git tag").toString().split("\n").filter(Boolean);

  console.log(tags);
}

run();
