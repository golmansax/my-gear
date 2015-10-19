require_relative 'types/query_type'

MyGearSchema = GraphQL::Schema.new(query: QueryType)
