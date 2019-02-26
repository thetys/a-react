export const typeDefs = `
  type DocumentationItem {
    id: ID!
    type: String!
  }
  
  type Query {
    selectedItem: DocumentationItem
  }
`;
