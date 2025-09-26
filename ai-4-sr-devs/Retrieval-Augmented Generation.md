---
aliases:
  - RAG
---
An [[Software Architecture|Architecture]] which is like complementing the [[Data]] available for the [[Large Language Model|LLM]], as if the [[Artificially Intelligent Agent|Agent]] is at a library

![[rag.avif]]

Used to enrich [[context]] like "updating" the already trained [[Model]], or restricting data by [[Actors and Roles|Role]]

Components

- LLM: generates texts coherently
- [[Encoding|Encoder]] [[Model]]: [[Token|Tokenizes]] documents
- [[Vector Database]]: stores the [[Embedding|Embeddings]]
- Similarity Search: using the encoder model, we use the vector database to find the most relevant chunks of text
- Integration and Orchestration: a [[System]] that put all of the model together