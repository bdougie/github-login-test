// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
}

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  "path": Array<string | number>,
  "message": string,
  "extensions": Record<string, unknown>
};



export type FindGitHubUserIdForRealInput = {
  /**
 * The user's login.
 */
 "login": string
};

export type FindGitHubUserIdForReal = {
  /**
  * Any data from the function will be returned here
  */
data: {
  gitHub: {
  /**
  * Lookup a user by login.
  */
user: {
  id: string;
  /**
  * Identifies the primary key from the database.
  */
databaseId: number;
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors: Array<GraphQLError>;
};

/**
 * Query to find user id info from github
 */
export function fetchFindGitHubUserIdForReal(
  variables: FindGitHubUserIdForRealInput,
  options?: NetlifyGraphFunctionOptions
): Promise<FindGitHubUserIdForReal>;


export type MyGitHubUserId = {
  /**
  * Any data from the function will be returned here
  */
data: {
  me: {
  github: {
  id: string;
  /**
  * Identifies the primary key from the database.
  */
databaseId: number;
};
};
};
  /**
  * Any errors from the function will be returned here
  */
errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchMyGitHubUserId(
  /**
  * Pass `{}` as no variables are defined for this function.
  */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<MyGitHubUserId>;
