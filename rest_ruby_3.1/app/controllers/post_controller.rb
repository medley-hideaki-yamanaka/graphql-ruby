class PostController < ApplicationController
  def index
    if params[:eager_load]
      posts = ::Post.eager_load(:author)
    else
      posts = ::Post.preload(:author)
    end

    result = posts.map do | post |
      {
        "id" => post.id,
        "title" => post.title,
        "author" => {
          "id" => post.author.id,
          "email" => post.author.email,
        }
      }
    end

    render json: result
  end
end
