# frozen_string_literal: true

module Types
  class AuthorType < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String
    field :last_name, String
    field :email, String, null: false
    field :birthday, GraphQL::Types::ISO8601Date
    field :add, GraphQL::Types::ISO8601DateTime
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :posts, [Types::PostType], null: false

    def posts
      Loaders::AssociationLoader.for(::Author, :posts).load(object)
    end
  end
end
