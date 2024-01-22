module Resolvers
  class PostsResolver < BaseResolver
    type [Types::PostType], null: false
    def resolve()
      ::Post.all
    end
  end
end