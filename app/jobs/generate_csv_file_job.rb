class GenerateCsvFileJob < ApplicationJob
  queue_as :default

  def perform(links)
    puts "links is here : #{links}"
  end
end