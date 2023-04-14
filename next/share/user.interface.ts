interface levelScore {
    now: number;
    max: number;
}
interface comment {
    text: string;
    where: string;
}
interface blockUser {
    name: string;
    address: string;
}
export interface IUser extends Document {
    name: string;
    level: number;
    score: levelScore;
    img: string;
    address: string;
    nft: object[];
    likeContent: string[];
    writing: string[];
    comment: comment[];
    blockList: blockUser[];
    searchHistory: string[];
}
