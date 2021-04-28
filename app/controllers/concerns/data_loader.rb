module DataLoader
  private

  def load_links
    @links = Link.order(is_pinned: :desc, created_at: :desc)
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end
end