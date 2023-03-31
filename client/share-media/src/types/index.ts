export interface InitialState {
    mode: string,
    user: {
        name: string | null, 
        friends: string[] | null
    }
    token: string,
    posts: any[] | null
}