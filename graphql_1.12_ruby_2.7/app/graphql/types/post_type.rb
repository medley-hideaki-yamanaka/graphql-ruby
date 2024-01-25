# frozen_string_literal: true

module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :author_id, Integer, null: false
    field :title, String, null: false
    field :description, String, null: false
    field :content, String, null: false
    field :date, GraphQL::Types::ISO8601Date, null: false
    field :author, Types::AuthorType, null: false

    def author
      Loaders::RecordLoader.for(::Author).load(object.author_id)
    end
  end
end
