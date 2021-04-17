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
    CSV.generate do |csv|
      csv << column_names
      all.each do |link|
        csv << link.attributes.values_at(*column_names)
      end
    end
  end
end