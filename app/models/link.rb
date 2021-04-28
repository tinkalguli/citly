class Link < ApplicationRecord
  require 'csv'
  
  validates :original_url,
            presence: true,
            uniqueness: true,
            format: URI::regexp(%w[http https]), 
            length: { minimum: 3, maximum: 255 }
  validates :shortened_url,
            presence: true,
            uniqueness: true,
            format: URI::regexp(%w[http https])
  validates :slug, presence: true

  def self.to_csv
    attributes = %w{original_url shortened_url clicked is_pinned}

    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |link|
        csv << attributes.map { |attr| link.send(attr) }
      end
    end
  end
end