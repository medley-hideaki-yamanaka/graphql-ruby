module Resolvers
  class AuthorsResolver < BaseResolver
    type [Types::AuthorType], null: false
    def resolve()
      ::Author.all
    end
  end
end