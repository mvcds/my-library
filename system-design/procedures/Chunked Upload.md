---
aliases: [Chunked Uploads, Multipart Upload, Multipart Uploads]
---

#procedure in [[3 - Uploading Videos and Images in Chunks Using Signed URLs]]

1. Divide the file into smaller chunks on the [[client]] side. Their size vary according to needs.
2. Each chunk gets a [[Signed URL]]
3. Upload each chunk to their signed URL. In sequence or [[Parallelism|parallel]]
4. When all chunks are on the [[Server]], notify the client and reassemble the file for processing.
5. If any chunk [[Success|fails]] to upload, retry the upload using a new signed URL or implement an [[error-handling strategy]] to ensure a smooth [[user experience]]