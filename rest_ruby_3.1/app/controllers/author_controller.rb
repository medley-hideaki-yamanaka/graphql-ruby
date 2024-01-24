class AuthorController < ApplicationController
  def index
    if params[:eager_load]
      authors = ::Author.eager_load(:posts)
    else
      authors = ::Author.preload(:posts)
    end

    result = authors.map do |author|
      posts = author.posts.map do |post|
        {"id" => post.id, "title" => post.title}
      end
      {"id" => author.id, "email" => author.email, "posts" => posts}
    end

    render json: result
  end
end
