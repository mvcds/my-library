A kind of file that does not contain content, instead, it only contains information about those files, such as their names,folder structure, and sizes obtained via cryptographic hash [[my-library/carreer/development/Value|values]] for verifying file integrity. In other words, it is a meta file.

Normally a torrent is distributed through a [[Peer-to-Peer Architecture|P2P Network]].

# Terms used around

- Torrent description file: a file signalizing the content
- Seder: the user who uploads the descriptor to the exchange
- Peer: people who download a file, as soon as a (piece of) a file is downloaded, the peer becomes a seeder for it
- Swarm: all PCs related to a certain torrent
- Tracker: peers connect to it in order to obtain the [[IP]] addresses of seeds and peers in the swarm
- Piece: a chunk of variable size that is transferred. Each piece is hashed by the protocol to avoid [[Tampering]]. The more rare the piece, the more it is prioritized it is when downloaded, in order to make it less rare.