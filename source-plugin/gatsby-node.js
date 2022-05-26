const fetch = require("node-fetch")
// constants for your GraphQL Contributor type
const CONTRIBUTOR_NODE_TYPE = `Contributor`
exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId },
  pluginOptions
) => {
  const { createNode } = actions
  let contributors = []
  const repoName = "novelrt/NovelRT"
  // construct the API URL
  const githubRepoURL = `https://api.github.com/repos/${repoName}/contributors`
  try {
    // make an API call
    const response = await fetch(githubRepoURL)
    // convert response to JSON
    const contributors = await response.json()
    // loop through "contributors" and create Gatsby nodes
    contributors.forEach(contributor =>
      createNode({
        ...contributor,
        id: createNodeId(`${CONTRIBUTOR_NODE_TYPE}-${contributor.id}`),
        parent: null,
        children: [],
        internal: {
          type: CONTRIBUTOR_NODE_TYPE,
          content: JSON.stringify(contributor),
          contentDigest: createContentDigest(contributor),
        },
      })
    )
  } catch (error) {
    console.error(error)
  }
  return
}
