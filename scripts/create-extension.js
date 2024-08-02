const fs = require("fs-extra");
const path = require("path");

const filesToCopy = ["manifest.json", "build", "icons", "public"];
const destDir = path.join(__dirname, "../extension");

const copyFiles = async () => {
    try {
        await fs.ensureDir(destDir);
        for (const file of filesToCopy) {
            const src = path.join(__dirname, "..", file);
            const dest = path.join(destDir, path.basename(file));
            await fs.copy(src, dest);

            console.log(`Copied ${src} to ${dest}`);
        }

        console.log("All files copied successfully!");
    } catch (err) {
        console.error("Error copying files:", err);
    }
};

(async () => {
    await copyFiles();
})();
