import { Storage } from "aws-amplify";

export async function s3Upload(file) {
    const filename = `${Date.now()}-${file.name}`;

    const stored = await Storage.vault.put(filename, file, {
        contentType: file.type
    });

    return stored.key;
}

export async function s3Remove(key) {
    try {
        await Storage.vault.remove(key);
        console.log("Attachment deleted successfully")
    } catch (e) {
        alert(e);
    }

}
