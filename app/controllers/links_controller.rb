class LinksController < ApplicationController
  before_action :generate_slug,
                :shortened_url,
                :validate_url,
                :check_uniqueness_of_link,
                only: :create
  before_action :load_link, only: :update
  before_action :load_link_by_slug, :update_click, only: :show
  before_action :load_links, only: :index

  def index
    render status: :ok, json: { links: @links }
    # render status: :ok, text: @links.to_csv
    # respond_to do |format|
    #   format.html
    #   format.json { render json: @links }
    #   format.csv { send_data @links.to_csv }
    # end

    # send_data @links.to_csv, filename: "cars-#{Date.today}.csv"
  end

  def create
    @link = Link.new(link_params)
    if @link.save
      render status: :ok, json: {
        notice: t('successfully_created')
      }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors  }
    end
  end

  def show
    render status: :ok, json: { link: @link }
  end

  def update
    if @link.update_attribute(:is_pinned, !@link.is_pinned)
      render status: :ok, json: {
        message: t('successfully_updated')
      }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  private

  def link_params
    params.require(:link).permit(:original_url)
      .merge(slug: @slug, shortened_url: @shortened_url)
  end

  def load_link
    @link = Link.find(params[:id])
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end

  def load_link_by_slug
    @link = Link.find_by(slug: params[:slug])
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end

  def update_click
    unless @link.update_attribute(:clicked, @link.clicked + 1)
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def load_links
    @links = Link.order(is_pinned: :desc, created_at: :desc)
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end

  def generate_slug
    @slug = SecureRandom.uuid[0..5]
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end

  def shortened_url
    @shortened_url = "#{request.base_url}/#{@slug}"
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end

  def validate_url
    unless (link_params[:original_url] =~ /^(http|https)/)
      render status: :unprocessable_entity, json: {
        errors: t('link_format_error')
      }
    end
  end

  def check_uniqueness_of_link
    link = Link.find_by(original_url: link_params[:original_url])
    if link
      render status: :unprocessable_entity, json: {
        info: t('link_already_exist')
      }
    end
  end
end
