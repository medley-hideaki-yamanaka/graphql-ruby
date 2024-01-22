class AuthorController < ApplicationController
  def index
    authors = ::Author.preload(:posts)

    result = authors.map do |author|
      posts = author.posts.map do |post|
        {"id" => post.id, "title" => post.title}
      end
      {"id" => author.id, "email" => author.email, "posts" => posts}
    end

    render json: result
  end
end
