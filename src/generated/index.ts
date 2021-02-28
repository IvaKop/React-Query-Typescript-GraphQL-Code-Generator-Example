import {
    useMutation,
    UseMutationOptions,
    useQuery,
    UseQueryOptions,
} from 'react-query'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> }

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
    return async (): Promise<TData> => {
        const res = await fetch(
            'https://fakeql.com/graphql/2aaf00462236e8280f4c3beb197aae54',
            {
                method: 'POST',
                body: JSON.stringify({ query, variables }),
            },
        )

        const json = await res.json()

        if (json.errors) {
            const { message } = json.errors[0]

            throw new Error(message)
        }

        return json.data
    }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    _Any: any
    /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
    DateTime: any
    _FieldSet: any
}

export type Query = {
    __typename?: 'Query'
    users?: Maybe<Array<Maybe<User>>>
    user?: Maybe<User>
    posts?: Maybe<Array<Maybe<Post>>>
    post?: Maybe<Post>
    comments?: Maybe<Array<Maybe<Comment>>>
    comment?: Maybe<Comment>
    _typeDefs: Scalars['String']
    _entities: Array<Maybe<_Entity>>
    _service: _Service
    _aggregation: Scalars['Float']
}

export type QueryUsersArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    sort?: Maybe<Scalars['String']>
    dir?: Maybe<Scalars['String']>
    where?: Maybe<UsersWhere>
    ref?: Maybe<Scalars['String']>
}

export type QueryUserArgs = {
    id: Scalars['ID']
}

export type QueryPostsArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    sort?: Maybe<Scalars['String']>
    dir?: Maybe<Scalars['String']>
    where?: Maybe<PostsWhere>
    ref?: Maybe<Scalars['String']>
}

export type QueryPostArgs = {
    id: Scalars['ID']
}

export type QueryCommentsArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    sort?: Maybe<Scalars['String']>
    dir?: Maybe<Scalars['String']>
    where?: Maybe<CommentsWhere>
    ref?: Maybe<Scalars['String']>
}

export type QueryCommentArgs = {
    id: Scalars['ID']
}

export type Query_EntitiesArgs = {
    representations: Array<Scalars['_Any']>
}

export type Query_AggregationArgs = {
    type?: Maybe<Scalars['String']>
    field?: Maybe<Scalars['String']>
    stat: Scalars['String']
    ref?: Maybe<Scalars['String']>
}

export type UsersWhere = {
    and?: Maybe<Array<UsersWhere>>
    or?: Maybe<Array<UsersWhere>>
    not?: Maybe<Array<UsersWhere>>
    id_gt?: Maybe<Scalars['Float']>
    id_ge?: Maybe<Scalars['Float']>
    id_lt?: Maybe<Scalars['Float']>
    id_le?: Maybe<Scalars['Float']>
    id_eq?: Maybe<Scalars['Float']>
    id_neq?: Maybe<Scalars['Float']>
    id_in?: Maybe<Array<Scalars['ID']>>
    id_nin?: Maybe<Array<Scalars['ID']>>
    firstname_contains?: Maybe<Scalars['String']>
    firstname_startswith?: Maybe<Scalars['String']>
    firstname_endswith?: Maybe<Scalars['String']>
    firstname_eq?: Maybe<Scalars['String']>
    firstname_neq?: Maybe<Scalars['String']>
    firstname_in?: Maybe<Array<Scalars['String']>>
    firstname_nin?: Maybe<Array<Scalars['String']>>
    firstname_exists?: Maybe<Scalars['Boolean']>
    age_gt?: Maybe<Scalars['Int']>
    age_ge?: Maybe<Scalars['Int']>
    age_lt?: Maybe<Scalars['Int']>
    age_le?: Maybe<Scalars['Int']>
    age_eq?: Maybe<Scalars['Int']>
    age_neq?: Maybe<Scalars['Int']>
    age_in?: Maybe<Array<Scalars['Int']>>
    age_nin?: Maybe<Array<Scalars['Int']>>
    age_exists?: Maybe<Scalars['Boolean']>
    search?: Maybe<Scalars['String']>
    like?: Maybe<Scalars['String']>
}

export type User = {
    __typename?: 'User'
    id: Scalars['ID']
    _nest: User
    _int: Scalars['Int']
    _float: Scalars['Float']
    _boolean: Scalars['Boolean']
    _string: Scalars['String']
    posts?: Maybe<Array<Maybe<Post>>>
    comments?: Maybe<Array<Maybe<Comment>>>
    firstname: Scalars['String']
    age: Scalars['Int']
}

export type User_IntArgs = {
    min?: Maybe<Scalars['Int']>
    max?: Maybe<Scalars['Int']>
}

export type User_FloatArgs = {
    min?: Maybe<Scalars['Float']>
    max?: Maybe<Scalars['Float']>
    fixed?: Maybe<Scalars['Int']>
}

export type User_StringArgs = {
    type?: Maybe<Scalars['String']>
    locale?: Maybe<Scalars['String']>
    template?: Maybe<Scalars['String']>
    length?: Maybe<Scalars['Int']>
    syllables?: Maybe<Scalars['Int']>
    casing?: Maybe<Scalars['String']>
    min?: Maybe<Scalars['Int']>
    max?: Maybe<Scalars['Int']>
    pool?: Maybe<Scalars['String']>
    sentences?: Maybe<Scalars['Int']>
    words?: Maybe<Scalars['Int']>
    nationality?: Maybe<Scalars['String']>
    full?: Maybe<Scalars['Boolean']>
}

export type UserPostsArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    sort?: Maybe<Scalars['String']>
    dir?: Maybe<Scalars['String']>
    where?: Maybe<PostsWhere>
    ref?: Maybe<Scalars['String']>
}

export type UserCommentsArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    sort?: Maybe<Scalars['String']>
    dir?: Maybe<Scalars['String']>
    where?: Maybe<CommentsWhere>
    ref?: Maybe<Scalars['String']>
}

export type UserFirstnameArgs = {
    length?: Maybe<Scalars['Int']>
}

export type UserAgeArgs = {
    math?: Maybe<MathOptions>
}

export type PostsWhere = {
    and?: Maybe<Array<PostsWhere>>
    or?: Maybe<Array<PostsWhere>>
    not?: Maybe<Array<PostsWhere>>
    id_gt?: Maybe<Scalars['Float']>
    id_ge?: Maybe<Scalars['Float']>
    id_lt?: Maybe<Scalars['Float']>
    id_le?: Maybe<Scalars['Float']>
    id_eq?: Maybe<Scalars['Float']>
    id_neq?: Maybe<Scalars['Float']>
    id_in?: Maybe<Array<Scalars['ID']>>
    id_nin?: Maybe<Array<Scalars['ID']>>
    user_id_exists?: Maybe<Scalars['Boolean']>
    title_contains?: Maybe<Scalars['String']>
    title_startswith?: Maybe<Scalars['String']>
    title_endswith?: Maybe<Scalars['String']>
    title_eq?: Maybe<Scalars['String']>
    title_neq?: Maybe<Scalars['String']>
    title_in?: Maybe<Array<Scalars['String']>>
    title_nin?: Maybe<Array<Scalars['String']>>
    title_exists?: Maybe<Scalars['Boolean']>
    date_contains?: Maybe<Scalars['String']>
    date_startswith?: Maybe<Scalars['String']>
    date_endswith?: Maybe<Scalars['String']>
    date_eq?: Maybe<Scalars['String']>
    date_neq?: Maybe<Scalars['String']>
    date_in?: Maybe<Array<Scalars['String']>>
    date_nin?: Maybe<Array<Scalars['String']>>
    date_exists?: Maybe<Scalars['Boolean']>
    search?: Maybe<Scalars['String']>
    like?: Maybe<Scalars['String']>
    user_and?: Maybe<Array<UsersWhere>>
    user_or?: Maybe<Array<UsersWhere>>
    user_not?: Maybe<Array<UsersWhere>>
    user_id_gt?: Maybe<Scalars['Float']>
    user_id_ge?: Maybe<Scalars['Float']>
    user_id_lt?: Maybe<Scalars['Float']>
    user_id_le?: Maybe<Scalars['Float']>
    user_id_eq?: Maybe<Scalars['Float']>
    user_id_neq?: Maybe<Scalars['Float']>
    user_id_in?: Maybe<Array<Scalars['ID']>>
    user_id_nin?: Maybe<Array<Scalars['ID']>>
    user_firstname_contains?: Maybe<Scalars['String']>
    user_firstname_startswith?: Maybe<Scalars['String']>
    user_firstname_endswith?: Maybe<Scalars['String']>
    user_firstname_eq?: Maybe<Scalars['String']>
    user_firstname_neq?: Maybe<Scalars['String']>
    user_firstname_in?: Maybe<Array<Scalars['String']>>
    user_firstname_nin?: Maybe<Array<Scalars['String']>>
    user_firstname_exists?: Maybe<Scalars['Boolean']>
    user_age_gt?: Maybe<Scalars['Int']>
    user_age_ge?: Maybe<Scalars['Int']>
    user_age_lt?: Maybe<Scalars['Int']>
    user_age_le?: Maybe<Scalars['Int']>
    user_age_eq?: Maybe<Scalars['Int']>
    user_age_neq?: Maybe<Scalars['Int']>
    user_age_in?: Maybe<Array<Scalars['Int']>>
    user_age_nin?: Maybe<Array<Scalars['Int']>>
    user_age_exists?: Maybe<Scalars['Boolean']>
    user_search?: Maybe<Scalars['String']>
    user_like?: Maybe<Scalars['String']>
}

export type Post = {
    __typename?: 'Post'
    id: Scalars['ID']
    _nest: Post
    _int: Scalars['Int']
    _float: Scalars['Float']
    _boolean: Scalars['Boolean']
    _string: Scalars['String']
    comments?: Maybe<Array<Maybe<Comment>>>
    user: User
    title: Scalars['String']
    date: Scalars['String']
}

export type Post_IntArgs = {
    min?: Maybe<Scalars['Int']>
    max?: Maybe<Scalars['Int']>
}

export type Post_FloatArgs = {
    min?: Maybe<Scalars['Float']>
    max?: Maybe<Scalars['Float']>
    fixed?: Maybe<Scalars['Int']>
}

export type Post_StringArgs = {
    type?: Maybe<Scalars['String']>
    locale?: Maybe<Scalars['String']>
    template?: Maybe<Scalars['String']>
    length?: Maybe<Scalars['Int']>
    syllables?: Maybe<Scalars['Int']>
    casing?: Maybe<Scalars['String']>
    min?: Maybe<Scalars['Int']>
    max?: Maybe<Scalars['Int']>
    pool?: Maybe<Scalars['String']>
    sentences?: Maybe<Scalars['Int']>
    words?: Maybe<Scalars['Int']>
    nationality?: Maybe<Scalars['String']>
    full?: Maybe<Scalars['Boolean']>
}

export type PostCommentsArgs = {
    page?: Maybe<Scalars['Int']>
    limit?: Maybe<Scalars['Int']>
    sort?: Maybe<Scalars['String']>
    dir?: Maybe<Scalars['String']>
    where?: Maybe<CommentsWhere>
    ref?: Maybe<Scalars['String']>
}

export type PostTitleArgs = {
    length?: Maybe<Scalars['Int']>
}

export type PostDateArgs = {
    length?: Maybe<Scalars['Int']>
}

export type CommentsWhere = {
    and?: Maybe<Array<CommentsWhere>>
    or?: Maybe<Array<CommentsWhere>>
    not?: Maybe<Array<CommentsWhere>>
    id_gt?: Maybe<Scalars['Float']>
    id_ge?: Maybe<Scalars['Float']>
    id_lt?: Maybe<Scalars['Float']>
    id_le?: Maybe<Scalars['Float']>
    id_eq?: Maybe<Scalars['Float']>
    id_neq?: Maybe<Scalars['Float']>
    id_in?: Maybe<Array<Scalars['ID']>>
    id_nin?: Maybe<Array<Scalars['ID']>>
    user_id_exists?: Maybe<Scalars['Boolean']>
    post_id_exists?: Maybe<Scalars['Boolean']>
    text_contains?: Maybe<Scalars['String']>
    text_startswith?: Maybe<Scalars['String']>
    text_endswith?: Maybe<Scalars['String']>
    text_eq?: Maybe<Scalars['String']>
    text_neq?: Maybe<Scalars['String']>
    text_in?: Maybe<Array<Scalars['String']>>
    text_nin?: Maybe<Array<Scalars['String']>>
    text_exists?: Maybe<Scalars['Boolean']>
    search?: Maybe<Scalars['String']>
    like?: Maybe<Scalars['String']>
    user_and?: Maybe<Array<UsersWhere>>
    user_or?: Maybe<Array<UsersWhere>>
    user_not?: Maybe<Array<UsersWhere>>
    user_id_gt?: Maybe<Scalars['Float']>
    user_id_ge?: Maybe<Scalars['Float']>
    user_id_lt?: Maybe<Scalars['Float']>
    user_id_le?: Maybe<Scalars['Float']>
    user_id_eq?: Maybe<Scalars['Float']>
    user_id_neq?: Maybe<Scalars['Float']>
    user_id_in?: Maybe<Array<Scalars['ID']>>
    user_id_nin?: Maybe<Array<Scalars['ID']>>
    user_firstname_contains?: Maybe<Scalars['String']>
    user_firstname_startswith?: Maybe<Scalars['String']>
    user_firstname_endswith?: Maybe<Scalars['String']>
    user_firstname_eq?: Maybe<Scalars['String']>
    user_firstname_neq?: Maybe<Scalars['String']>
    user_firstname_in?: Maybe<Array<Scalars['String']>>
    user_firstname_nin?: Maybe<Array<Scalars['String']>>
    user_firstname_exists?: Maybe<Scalars['Boolean']>
    user_age_gt?: Maybe<Scalars['Int']>
    user_age_ge?: Maybe<Scalars['Int']>
    user_age_lt?: Maybe<Scalars['Int']>
    user_age_le?: Maybe<Scalars['Int']>
    user_age_eq?: Maybe<Scalars['Int']>
    user_age_neq?: Maybe<Scalars['Int']>
    user_age_in?: Maybe<Array<Scalars['Int']>>
    user_age_nin?: Maybe<Array<Scalars['Int']>>
    user_age_exists?: Maybe<Scalars['Boolean']>
    user_search?: Maybe<Scalars['String']>
    user_like?: Maybe<Scalars['String']>
    post_and?: Maybe<Array<PostsWhere>>
    post_or?: Maybe<Array<PostsWhere>>
    post_not?: Maybe<Array<PostsWhere>>
    post_id_gt?: Maybe<Scalars['Float']>
    post_id_ge?: Maybe<Scalars['Float']>
    post_id_lt?: Maybe<Scalars['Float']>
    post_id_le?: Maybe<Scalars['Float']>
    post_id_eq?: Maybe<Scalars['Float']>
    post_id_neq?: Maybe<Scalars['Float']>
    post_id_in?: Maybe<Array<Scalars['ID']>>
    post_id_nin?: Maybe<Array<Scalars['ID']>>
    post_user_id_exists?: Maybe<Scalars['Boolean']>
    post_title_contains?: Maybe<Scalars['String']>
    post_title_startswith?: Maybe<Scalars['String']>
    post_title_endswith?: Maybe<Scalars['String']>
    post_title_eq?: Maybe<Scalars['String']>
    post_title_neq?: Maybe<Scalars['String']>
    post_title_in?: Maybe<Array<Scalars['String']>>
    post_title_nin?: Maybe<Array<Scalars['String']>>
    post_title_exists?: Maybe<Scalars['Boolean']>
    post_date_contains?: Maybe<Scalars['String']>
    post_date_startswith?: Maybe<Scalars['String']>
    post_date_endswith?: Maybe<Scalars['String']>
    post_date_eq?: Maybe<Scalars['String']>
    post_date_neq?: Maybe<Scalars['String']>
    post_date_in?: Maybe<Array<Scalars['String']>>
    post_date_nin?: Maybe<Array<Scalars['String']>>
    post_date_exists?: Maybe<Scalars['Boolean']>
    post_search?: Maybe<Scalars['String']>
    post_like?: Maybe<Scalars['String']>
}

export type Comment = {
    __typename?: 'Comment'
    id: Scalars['ID']
    _nest: Comment
    _int: Scalars['Int']
    _float: Scalars['Float']
    _boolean: Scalars['Boolean']
    _string: Scalars['String']
    user: User
    post: Post
    text: Scalars['String']
}

export type Comment_IntArgs = {
    min?: Maybe<Scalars['Int']>
    max?: Maybe<Scalars['Int']>
}

export type Comment_FloatArgs = {
    min?: Maybe<Scalars['Float']>
    max?: Maybe<Scalars['Float']>
    fixed?: Maybe<Scalars['Int']>
}

export type Comment_StringArgs = {
    type?: Maybe<Scalars['String']>
    locale?: Maybe<Scalars['String']>
    template?: Maybe<Scalars['String']>
    length?: Maybe<Scalars['Int']>
    syllables?: Maybe<Scalars['Int']>
    casing?: Maybe<Scalars['String']>
    min?: Maybe<Scalars['Int']>
    max?: Maybe<Scalars['Int']>
    pool?: Maybe<Scalars['String']>
    sentences?: Maybe<Scalars['Int']>
    words?: Maybe<Scalars['Int']>
    nationality?: Maybe<Scalars['String']>
    full?: Maybe<Scalars['Boolean']>
}

export type CommentTextArgs = {
    length?: Maybe<Scalars['Int']>
}

export enum MathOptions {
    Round = 'ROUND',
    Floor = 'FLOOR',
    Ceil = 'CEIL',
}

export type _Entity = User | Post | Comment

export type _Service = {
    __typename?: '_Service'
    sdl?: Maybe<Scalars['String']>
}

export type Mutation = {
    __typename?: 'Mutation'
    incrementUserAge?: Maybe<Scalars['Int']>
    decrementUserAge?: Maybe<Scalars['Int']>
    createUser: User
    updateUser: User
    deleteUser: Scalars['ID']
    createPost: Post
    updatePost: Post
    deletePost: Scalars['ID']
    createComment: Comment
    updateComment: Comment
    deleteComment: Scalars['ID']
    _createSnapshot: Scalars['Boolean']
}

export type MutationIncrementUserAgeArgs = {
    id: Scalars['ID']
}

export type MutationDecrementUserAgeArgs = {
    id: Scalars['ID']
}

export type MutationCreateUserArgs = {
    input: CreateUserInput
}

export type MutationUpdateUserArgs = {
    id: Scalars['ID']
    input: UpdateUserInput
}

export type MutationDeleteUserArgs = {
    id: Scalars['ID']
}

export type MutationCreatePostArgs = {
    input: CreatePostInput
}

export type MutationUpdatePostArgs = {
    id: Scalars['ID']
    input: UpdatePostInput
}

export type MutationDeletePostArgs = {
    id: Scalars['ID']
}

export type MutationCreateCommentArgs = {
    input: CreateCommentInput
}

export type MutationUpdateCommentArgs = {
    id: Scalars['ID']
    input: UpdateCommentInput
}

export type MutationDeleteCommentArgs = {
    id: Scalars['ID']
}

export type Mutation_CreateSnapshotArgs = {
    key: Scalars['String']
}

export type CreateUserInput = {
    firstname: Scalars['String']
    age: Scalars['Int']
}

export type UpdateUserInput = {
    firstname?: Maybe<Scalars['String']>
    age?: Maybe<Scalars['Int']>
}

export type CreatePostInput = {
    user_id: Scalars['ID']
    title: Scalars['String']
    date: Scalars['String']
}

export type UpdatePostInput = {
    user_id?: Maybe<Scalars['ID']>
    title?: Maybe<Scalars['String']>
    date?: Maybe<Scalars['String']>
}

export type CreateCommentInput = {
    user_id: Scalars['ID']
    post_id: Scalars['ID']
    text: Scalars['String']
}

export type UpdateCommentInput = {
    user_id?: Maybe<Scalars['ID']>
    post_id?: Maybe<Scalars['ID']>
    text?: Maybe<Scalars['String']>
}

export type DeletePostMutationVariables = Exact<{
    id: Scalars['ID']
}>

export type DeletePostMutation = { __typename?: 'Mutation' } & Pick<
    Mutation,
    'deletePost'
>

export type PostsQueryVariables = Exact<{ [key: string]: never }>

export type PostsQuery = { __typename?: 'Query' } & {
    posts?: Maybe<
        Array<Maybe<{ __typename?: 'Post' } & Pick<Post, 'id' | 'title'>>>
    >
}

export const DeletePostDocument = `
    mutation DeletePost($id: ID!) {
  deletePost(id: $id)
}
    `
export const useDeletePostMutation = <TError = unknown, TContext = unknown>(
    options?: UseMutationOptions<
        DeletePostMutation,
        TError,
        DeletePostMutationVariables,
        TContext
    >,
) =>
    useMutation<
        DeletePostMutation,
        TError,
        DeletePostMutationVariables,
        TContext
    >(
        (variables?: DeletePostMutationVariables) =>
            fetcher<DeletePostMutation, DeletePostMutationVariables>(
                DeletePostDocument,
                variables,
            )(),
        options,
    )
export const PostsDocument = `
    query Posts {
  posts {
    id
    title
  }
}
    `
export const usePostsQuery = <TData = PostsQuery, TError = unknown>(
    variables?: PostsQueryVariables,
    options?: UseQueryOptions<PostsQuery, TError, TData>,
) =>
    useQuery<PostsQuery, TError, TData>(
        ['Posts', variables],
        fetcher<PostsQuery, PostsQueryVariables>(PostsDocument, variables),
        options,
    )
