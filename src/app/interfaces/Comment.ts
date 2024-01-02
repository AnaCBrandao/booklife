export interface Comment {
    id?: number;
    text: string;
    username: string;
    bookId: number;
    created_at?: string;
    updated_at?: string;
}