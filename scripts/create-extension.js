const fs = require("fs-extra");
const path = require("path");
const archiver = require("archiver");

const filesToCopy = ["manifest.json", "build", "icons", "public"];
const destDir = path.join(__dirname, "../extension");
const zipFile = path.join(__dirname, "../chrome-extension.zip");

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

const createZip = () => {
    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(zipFile);
        const archive = archiver("zip", { zlib: { level: 9 } });

        output.on("close", () => {
            console.log(`${archive.pointer()} total bytes`);
            console.log("Zip file created successfully!");
            resolve();
        });

        archive.on("error", (err) => {
            console.error("Error creating zip file:", err);
            reject(err);
        });

        archive.pipe(output);
        archive.directory(destDir, false);
        archive.finalize();
    });
};

(async () => {
    await copyFiles();
    await createZip();
})();
