class LinksController < ApplicationController
  def index
    @links = Link.all
    render status: :ok, json: { links: @links }
   end

  def create
    @link = Link.new(link_params)
    if @link.save
      render status: :ok, json: {
        notice: 'link was successfully created'
      }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors  }
    end
  end


  private

  def link_params
    params.require(:link).permit(:original_url)
  end

  def shorten_url
    "localhost:3000/#{@link.id.to_s(36)}"
  end
end
