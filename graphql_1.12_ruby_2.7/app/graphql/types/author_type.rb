# frozen_string_literal: true

module Types
  class AuthorType < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false
    field :email, String, null: false
    field :birthdate, GraphQL::Types::ISO8601Date, null: false
    field :added, GraphQL::Types::ISO8601DateTime, null: false
    field :posts, [Types::PostType], null: false

    def posts
      Loaders::AssociationLoader.for(::Author, :posts).load(object)
    end
  end
end
