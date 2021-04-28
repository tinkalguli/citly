class HomeController < ApplicationController
  before_action :load_links, only: :report

  def index
    render
  end

  def report
    send_data @links.to_csv, filename: "links-#{Date.today}.csv"
  end
end
