class LinksController < ApplicationController
  before_action :generate_slug, :shortened_url, only: :create

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
      .merge(slug: @slug, shortened_url: @shortened_url)
  end

  def generate_slug
    @slug = SecureRandom.uuid[0..5]
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end

  def shortened_url
    @shortened_url = "localhost:3000/#{@slug}"
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end
end
