# frozen_string_literal: true

module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :author_id, Integer
    field :title, String, null: false
    field :description, String
    field :content, String
    field :date, GraphQL::Types::ISO8601Date
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :author, Types::AuthorType, null: false

    def author
      Loaders::RecordLoader.for(::Author).load(object.author_id)
    end
  end
end
